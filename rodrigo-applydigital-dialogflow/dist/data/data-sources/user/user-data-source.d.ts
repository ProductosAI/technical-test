import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';
import { UserGetResult } from 'src/domain/models/user/user-get-result';
import { DatabaseDataSource } from 'src/data/interfaces/data-sources/database';
import { UserSetParameters } from 'src/domain/models/user/user-set-parameters';
export declare class UserDataSource {
    private userDataSource;
    constructor(userDataSource: DatabaseDataSource<User>);
    get(params: UserGetParameters): Promise<UserGetResult>;
    set(params: UserSetParameters): Promise<boolean>;
}
