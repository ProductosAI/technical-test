import { Body, Controller, Get, HttpStatus, NotFoundException, Param, Post, Res } from '@nestjs/common';
import { UserService } from './application/services/user.service';
import { User } from './domain/models/user/user';
import { UserGetParameters } from './domain/models/user/user-get-parameters';
import { UserSetParameters } from './domain/models/user/user-set-parameters';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('user/:id')
    async getUser(@Res({ passthrough: true }) res, @Param() params: UserGetParameters): Promise<User> {
        const user: User = await this.userService.get(params);
        if (!user) {
            res.status(HttpStatus.NOT_FOUND);
        }
        return user;
    }

    @Post('user')
    async createUser(@Body() query: UserSetParameters): Promise<boolean> {
        return await this.userService.set(query);
    }
}

/*Knowledge section

@Res() res:
-- WORKS: res.status(HttpStatus.OK).json(user).send(); (without : Promise<User>)
-- DOESN'T: return user;
-- WORKS: res.status(HttpStatus.NOT_FOUND).send(); (without : Promise<User>)

@Res({ passthrough: true }) res:
-- WORKS: throw new NotFoundException();
-- WORKS: res.status(HttpStatus.NOT_FOUND);//.send();
            return user;

*/