import { User } from '../../domain/models/user/user';
import { UserGetParameters } from '../../domain/models/user/user-get-parameters';
import { UserSetParameters } from '../../domain/models/user/user-set-parameters';
import { GetUserUseCase } from '../useCases/get-user-use-case';
import { SetUserUseCase } from '../useCases/set-user-use-case';
export declare class UserController {
    private readonly getUserUseCase;
    private readonly setUserUseCase;
    constructor(getUserUseCase: GetUserUseCase, setUserUseCase: SetUserUseCase);
    getUser(res: any, params: UserGetParameters): Promise<User>;
    createUser(query: UserSetParameters): Promise<boolean>;
}
