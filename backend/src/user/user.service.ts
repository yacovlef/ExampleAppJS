import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}
    
    async getAll(options: object): Promise<[UserEntity[], number]> {
        return await this.userRepository.findAndCount({ 
            select: ['id', 'firstName', 'lastName', 'email'],
            order: {createdAt: 'DESC'},
            ...options
        });
    }

    async getOne(email: string): Promise<UserEntity> {
        return await this.userRepository.findOne({email});
    }

    async create(data: UserDTO) {
        const password = await bcrypt.hash(data.password, 10);

        return await this.userRepository.insert({...data, password});
    }

    async update(id: number, data: UserDTO) {
        const {createdAt, updatedAt, ...user} = data;

        if (user.password) {
            user.password = await bcrypt.hash(data.password, 10);
        }

        return await this.userRepository.update({id}, user);
    }

    async destroy(id: number) {
        return await this.userRepository.delete({id});
    }
}
