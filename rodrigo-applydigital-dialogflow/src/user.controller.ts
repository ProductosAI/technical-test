import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { UserService } from './application/services/user.service';
import { User } from './domain/models/user/user';
import { UserGetParameters } from './domain/models/user/user-get-parameters';
import { UserSetParameters } from './domain/models/user/user-set-parameters';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('user/:id')
    async getUser(@Param() params: UserGetParameters): Promise<User> {
        const user: User = await this.userService.get(params);
        if (user) {
            return user;
            //res.status(HttpStatus.OK).json(user).send();
        } else {
            throw new NotFoundException();
            //res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post('user')
    async createUser(@Body() query: UserSetParameters): Promise<boolean> {
        return await this.userService.set(query);
    }
}
