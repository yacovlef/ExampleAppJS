import { Controller, Get, Post, Put, Delete, Body, Param, Request, UseGuards } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    index(@Request() request) {
        const { take, skip } = request.query;

        return this.userService.getAll({take, skip});
    }

    @Post()
    create(@Body() data: UserDTO) {
        return this.userService.create(data);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() data: UserDTO) {
        return this.userService.update(id, data);
    }

    @Delete(':id')
    destroy(@Param('id') id: number) {
        return this.userService.destroy(id);
    }
}
