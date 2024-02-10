import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';
import { UserDataSource } from '../../data/data-sources/user/user-data-source';
import { UserSetParameters } from 'src/domain/models/user/user-set-parameters';
export declare class UserService {
    private userDataSource;
    constructor(userDataSource: UserDataSource);
    get(params: UserGetParameters): Promise<Nullable<User>>;
    set(params: UserSetParameters): Promise<boolean>;
}
