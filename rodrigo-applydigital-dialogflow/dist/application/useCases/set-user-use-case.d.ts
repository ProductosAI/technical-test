import { UseCase } from './use-case';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { UserService } from '../services/user.service';
import { UserSetParameters } from 'src/domain/models/user/user-set-parameters';
export declare class SetUserUseCase implements UseCase<UserGetParameters, boolean> {
    private readonly service;
    constructor(service: UserService);
    execute(request: UserSetParameters): Promise<boolean>;
}
