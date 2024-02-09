import { UserService } from './application/services/user.service';
import { User } from './domain/models/user/user';
import { UserGetParameters } from './domain/models/user/user-get-parameters';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(res: any, query: UserGetParameters): Promise<Nullable<User>>;
}
