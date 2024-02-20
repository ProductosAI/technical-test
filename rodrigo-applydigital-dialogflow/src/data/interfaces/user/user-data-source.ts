import { UserGetParameters } from '../../../domain/models/user/user-get-parameters';
import { UserGetResult } from '../../../domain/models/user/user-get-result';
import { UserSetParameters } from '../../../domain/models/user/user-set-parameters';

export abstract class IUserDataSource {
    abstract get(params: UserGetParameters): Promise<UserGetResult>;
    abstract set(params: UserSetParameters): Promise<boolean>;
}