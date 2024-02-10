import { UseCase } from './use-case';
import { UserSetParameters } from 'src/domain/models/user/user-set-parameters';

export interface SetUserUseCase extends UseCase<UserSetParameters, boolean> {   
}