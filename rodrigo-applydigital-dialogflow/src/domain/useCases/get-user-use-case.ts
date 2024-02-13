import { Injectable } from '@nestjs/common';
import { UserGetParameters } from 'src/domain/models/user/user-get-parameters';
import { User } from 'src/domain/models/user/user';
import { IUserService } from '../interfaces/services/user.service';
import { IGetUserUseCase } from '../interfaces/useCases/get-user-use-case';

@Injectable()
export class GetUserUseCase implements IGetUserUseCase {
    constructor(private readonly service: IUserService) {}

    async execute(request: UserGetParameters): Promise<Nullable<User>> {
        return await this.service.get(request);
    }
}
