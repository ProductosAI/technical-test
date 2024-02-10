import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';
import { UserSetParameters } from 'src/domain/models/user/user-set-parameters';

export abstract class IUserService {
    abstract get(params: UserGetParameters): Promise<Nullable<User>>;
    abstract set(params: UserSetParameters): Promise<boolean>;
}