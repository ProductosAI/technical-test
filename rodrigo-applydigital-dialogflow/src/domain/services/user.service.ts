import { Injectable } from '@nestjs/common';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';
import { UserGetResult } from 'src/domain/models/user/user-get-result';
import { UserSetParameters } from 'src/domain/models/user/user-set-parameters';
import { IUserService } from '../interfaces/services/user.service';
import { IUserDataSource } from '../../data/interfaces/user/user-data-source';

@Injectable()
export class UserService implements IUserService {
    constructor(private userDataSource: IUserDataSource) {}

    async get(params: UserGetParameters): Promise<Nullable<User>> {
        const result: UserGetResult = await this.userDataSource.get(params);
        return result.user;
    };

    async set(params: UserSetParameters): Promise<boolean> {
        return await this.userDataSource.set(params);
    };
}
