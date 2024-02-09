import { Injectable } from '@nestjs/common';
import { UseCase } from './use-case';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { UserService } from '../services/user.service';
import { User } from 'src/domain/models/user/user';

@Injectable()
export class GetUserUseCase implements UseCase<UserGetParameters, Nullable<User>> {
    constructor(private readonly service: UserService) {}

    async execute(request: UserGetParameters): Promise<Nullable<User>> {
        return await this.service.get(request);
    }
}
