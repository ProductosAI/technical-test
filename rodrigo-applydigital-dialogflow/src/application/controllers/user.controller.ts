import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { User } from '../../domain/models/user/user';
import { UserGetParameters } from '../../domain/models/user/user-get-parameters';
import { UserSetParameters } from '../../domain/models/user/user-set-parameters';
import { GetUserUseCase } from '../../domain/useCases/get-user-use-case';
import { SetUserUseCase } from '../../domain/useCases/set-user-use-case';

@Controller()
export class UserController {
    constructor(
        private readonly getUserUseCase: GetUserUseCase,
        private readonly setUserUseCase: SetUserUseCase
    ) {}

    @Get('user/:id')
    async getUser(@Res({ passthrough: true }) res, @Param() params: UserGetParameters): Promise<User> {
        const user: User = await this.getUserUseCase.execute(params);
        if (!user) {
            res.status(HttpStatus.NOT_FOUND);
        }
        return user;
    }

    @Post('user')
    async createUser(@Body() query: UserSetParameters): Promise<boolean> {
        return await this.setUserUseCase.execute(query);
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