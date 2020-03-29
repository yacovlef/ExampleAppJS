import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.getOne(username);
    if (user && user.password === pass) {
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
