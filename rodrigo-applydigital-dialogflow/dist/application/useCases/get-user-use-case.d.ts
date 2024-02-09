import { UseCase } from './use-case';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { UserService } from '../services/user.service';
import { User } from 'src/domain/models/user/user';
export declare class GetUserUseCase implements UseCase<UserGetParameters, Nullable<User>> {
    private readonly service;
    constructor(service: UserService);
    execute(request: UserGetParameters): Promise<Nullable<User>>;
}
