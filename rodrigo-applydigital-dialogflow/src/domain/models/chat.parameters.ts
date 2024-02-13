import { IsNotEmpty } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChatParameters {
    @ApiProperty({
        description: 'The message sent to the chatbot'
    })
    @IsNotEmpty()
    message: string;
}
