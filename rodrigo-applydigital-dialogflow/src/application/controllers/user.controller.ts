import { Body, Controller, Get, HttpStatus, Param, Post, Res, HttpException } from '@nestjs/common';
import { User } from '../../domain/models/user/user';
import { UserGetParameters } from '../../domain/models/user/user-get-parameters';
import { UserSetParameters } from '../../domain/models/user/user-set-parameters';
import { IGetUserUseCase } from '../../domain/interfaces/useCases/get-user-use-case';
import { ISetUserUseCase } from '../../domain/interfaces/useCases/set-user-use-case';
import { StorageFullError } from '../../data/data-sources/models/storage-full-error';

@Controller()
export class UserController {
    constructor(
        private readonly getUserUseCase: IGetUserUseCase,
        private readonly setUserUseCase: ISetUserUseCase
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
        try {
            return await this.setUserUseCase.execute(query);
        } catch (error) {
            if (error instanceof StorageFullError) {
                throw new HttpException('Storage is full', HttpStatus.INTERNAL_SERVER_ERROR);
            } else {
                throw error;
            }
        }
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