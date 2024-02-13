import { Injectable } from '@nestjs/common';
import { UserSetParameters } from 'src/domain/models/user/user-set-parameters';
import { IUserService } from '../interfaces/services/user.service';
import { ISetUserUseCase } from '../interfaces/useCases/set-user-use-case';

@Injectable()
export class SetUserUseCase implements ISetUserUseCase {
    constructor(private readonly service: IUserService) {}

    async execute(request: UserSetParameters): Promise<boolean> {
        return await this.service.set(request);
    }
}
