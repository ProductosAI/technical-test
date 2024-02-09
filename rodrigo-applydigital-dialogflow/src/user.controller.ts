import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { UserService } from './application/services/user.service';
import { User } from './domain/models/user/user';
import { UserGetParameters } from './domain/models/user/user-get-parameters';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('user/:id')
    async getUser(@Res() res, @Param() query: UserGetParameters): Promise<Nullable<User>> {
        const user: User = await this.userService.get(query);
        if (user) {
            return user;
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
