import { IUseCase } from './use-case';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';

export abstract class IGetUserUseCase extends IUseCase<UserGetParameters, Nullable<User>> {   
}