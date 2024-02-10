import { IsNotEmpty, IsNumber } from '@nestjs/class-validator';

export class UserSetParameters {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsNumber()
    age?: number;
}
