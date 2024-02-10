import { Injectable } from '@nestjs/common';
import { UserGetParameters } from '../../../domain/models/user/user-get-parameters';
import { User } from '../../../domain/models/user/user';
import { UserGetResult } from '../../../domain/models/user/user-get-result';
import { DatabaseDataSource } from '../../interfaces/data-sources/database';
import { UserSetParameters } from '../../../domain/models/user/user-set-parameters';

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
