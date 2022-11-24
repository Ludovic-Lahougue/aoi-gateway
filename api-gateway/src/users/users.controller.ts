import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(): any {
        return this.usersService.findAll();
    }

    @Get(':id')
    getUser(@Param('id') id: number): any {
        return this.usersService.findOneById(id);
    }
}
