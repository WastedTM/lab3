import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    private readonly users: UserDto[] = [];

    create(userDto: UserDto) {
        this.users.push(userDto);
    }

    findAll(): UserDto[] {
        return this.users;
    }

    findOne(id: number): UserDto {
        return this.users[id];
    }

    update(id: number, userDto: UserDto) {
        this.users[id] = userDto;
    }

    remove(id: number) {
        this.users.splice(id, 1);
    }
}