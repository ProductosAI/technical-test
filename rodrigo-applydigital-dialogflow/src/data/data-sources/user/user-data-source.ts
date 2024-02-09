import { Injectable } from '@nestjs/common';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';
import { UserGetResult } from 'src/domain/models/user/user-get-result';
import { DatabaseDataSource } from 'src/data/interfaces/data-sources/database';
import { UserSetParameters } from 'src/domain/models/user/user-set-parameters';

@Injectable()
export class UserDataSource {
    constructor(private userDataSource: DatabaseDataSource<User>) {}

    async get(params: UserGetParameters): Promise<UserGetResult> {
        const user = await this.userDataSource.get(params.id);
        const result: UserGetResult = {
            user: user
        }
        return result;
    };

    async set(params: UserSetParameters): Promise<boolean> {
        const user: User = {
            id: params.id,
            name: params.name,
            age: params.age
        }
        return await this.userDataSource.set(user.id, user);
    };
}
