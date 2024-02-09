import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserGetParameters } from './user-get-parameters';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('user')
    async chat(@Query() query: UserGetParameters): Promise<number> {
        return await this.userService.getUser(query);
    }
}
