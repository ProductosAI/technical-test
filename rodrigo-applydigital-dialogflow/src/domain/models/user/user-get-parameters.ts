import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserGetParameters {
    @ApiProperty()
    @IsNotEmpty()
    id: string;
}
