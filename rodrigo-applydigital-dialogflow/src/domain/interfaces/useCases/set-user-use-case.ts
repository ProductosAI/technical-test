import { IUseCase } from './use-case';
import { UserSetParameters } from 'src/domain/models/user/user-set-parameters';

export abstract class ISetUserUseCase extends IUseCase<UserSetParameters, boolean> {   
}