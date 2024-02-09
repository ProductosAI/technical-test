import { UserService } from './application/services/user.service';
import { User } from './domain/models/user/user';
import { UserGetParameters } from './domain/models/user/user-get-parameters';
import { UserSetParameters } from './domain/models/user/user-set-parameters';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(res: any, params: UserGetParameters): Promise<User>;
    createUser(query: UserSetParameters): Promise<boolean>;
}
