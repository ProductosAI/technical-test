import { IsNotEmpty } from '@nestjs/class-validator';

export class UserGetParameters {
    @IsNotEmpty()
    id: string;
}
