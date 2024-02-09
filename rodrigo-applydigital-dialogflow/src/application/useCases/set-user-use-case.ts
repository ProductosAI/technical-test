import { Injectable } from '@nestjs/common';
import { UseCase } from './use-case';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { UserService } from '../services/user.service';
import { UserSetParameters } from 'src/domain/models/user/user-set-parameters';

@Injectable()
export class SetUserUseCase implements UseCase<UserGetParameters, boolean> {
    constructor(private readonly service: UserService) {}

    async execute(request: UserSetParameters): Promise<boolean> {
        return await this.service.set(request);
    }
}
