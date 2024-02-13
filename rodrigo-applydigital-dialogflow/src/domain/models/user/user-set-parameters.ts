import { v4 as uuid } from 'uuid';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min } from '@nestjs/class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserSetParameters {
    @ApiPropertyOptional()
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    id: string = uuid();

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    name: string;

    @ApiPropertyOptional()
    @IsNumber()
    @Min(1)
    age?: number;
}
