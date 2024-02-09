import { IsNotEmpty } from '@nestjs/class-validator';

export class ChatParameters {
    @IsNotEmpty()
    message: string;
}
