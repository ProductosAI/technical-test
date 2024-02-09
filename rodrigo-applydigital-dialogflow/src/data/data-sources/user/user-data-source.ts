import { Injectable } from '@nestjs/common';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';
import { UserGetResult } from 'src/domain/models/user/user-get-result';
import { DatabaseDataSource } from 'src/data/interfaces/data-sources/database';

@Injectable()
export class UserDataSource {
    constructor(private userDataSource: DatabaseDataSource<User>) {}

    async get(params: UserGetParameters): Promise<UserGetResult> {
        const result: UserGetResult = {
            user: await this.userDataSource.get(params.id)
        }
        return result;
    };
}
