import { v4 as uuid } from 'uuid';
import { IsNotEmpty, IsNumber, IsOptional } from '@nestjs/class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserSetParameters {
    @ApiPropertyOptional()
    @IsOptional()
    @IsNotEmpty()
    id: string = uuid();

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiPropertyOptional({
        minimum: 1
    })
    @IsNumber()
    age?: number;
}
