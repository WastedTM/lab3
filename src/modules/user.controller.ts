import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    create(@Body() userDto: UserDto) {
        this.userService.create(userDto);
    }

    @Get()
    findAll(): UserDto[] {
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): UserDto {
        return this.userService.findOne(parseInt(id));
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() userDto: UserDto) {
        this.userService.update(parseInt(id), userDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        this.userService.remove(parseInt(id));
    }
}