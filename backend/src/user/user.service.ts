import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './user.entity';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}
    
    async showAll(take: number, skip: number): Promise<[UserEntity[], number]> {
        return await this.userRepository.findAndCount({ 
            order: {createdAt: 'DESC'},
            skip,
            take
        });
    }

    async create(data: UserDTO) {
        return await this.userRepository.insert(data);
    }

    async show(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne(id);
    }

    async update(id: number, data: UserDTO) {
        const {createdAt, updatedAt, ...user} = data;

        return await this.userRepository.update({id}, user);
    }

    async destroy(id: number) {
        return await this.userRepository.delete({id});
    }
}
