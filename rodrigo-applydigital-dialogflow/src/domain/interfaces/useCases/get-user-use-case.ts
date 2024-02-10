import { UseCase } from './use-case';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';

export interface GetUserUseCase extends UseCase<UserGetParameters, Nullable<User>> {   
}