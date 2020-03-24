import { Controller, Get, Post, Put, Delete, Body, Param, Request } from '@nestjs/common';

import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Get()
    index(@Request() request) {
        const { take, skip } = request.query;

        return this.userService.showAll({take, skip});
    }

    @Post()
    create(@Body() data: UserDTO) {
        this.userService.create(data);
    }

    @Get(':id')
    show(@Param('id') id: number) {
        return this.userService.show(id);
    }

    @Put(':id')
    update(@Param('id') id:number, @Body() data: UserDTO) {
        this.userService.update(id, data);
    }

    @Delete(':id')
    destroy(@Param('id') id: number) {
        return this.userService.destroy(id);
    }
}
