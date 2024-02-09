import { IsNotEmpty } from '@nestjs/class-validator';

export class UserSetParameters {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    age?: number;
}
