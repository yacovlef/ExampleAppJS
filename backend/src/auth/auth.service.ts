import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getOne(username);

    const isValid = await bcrypt.compare(pass, user.password);
    
    if (user && isValid) {
      const result = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email };

      return result;
    }

    return null;
  }

  async login(user) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
