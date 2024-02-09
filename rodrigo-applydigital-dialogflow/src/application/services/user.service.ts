import { Injectable } from '@nestjs/common';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';
import { UserGetResult } from 'src/domain/models/user/user-get-result';
import { UserDataSource } from 'src/data/data-sources/user/user-data-source';

@Injectable()
export class UserService {
    constructor(private userDataSource: UserDataSource) {}

    async get(params: UserGetParameters): Promise<Nullable<User>> {
        const result: UserGetResult = await this.userDataSource.get(params);
        return result.user;
    };
}
