import { UserService } from './user.service';
import { UserGetParameters } from './user-get-parameters';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    chat(query: UserGetParameters): Promise<number>;
}
