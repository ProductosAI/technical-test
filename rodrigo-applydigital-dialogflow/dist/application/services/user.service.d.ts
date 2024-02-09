import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';
import { UserDataSource } from 'src/data/data-sources/user/user-data-source';
export declare class UserService {
    private userDataSource;
    constructor(userDataSource: UserDataSource);
    get(params: UserGetParameters): Promise<Nullable<User>>;
}
