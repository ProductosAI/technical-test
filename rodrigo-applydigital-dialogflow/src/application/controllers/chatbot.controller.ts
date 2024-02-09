import { Controller, Get, Query } from '@nestjs/common';
import { ChatParameters } from '../../domain/models/chat.parameters';
import { ChatbotResult } from '../../domain/models/chatbot.result';
import { ChatUseCase } from '../useCases/chat-use-case';

@Controller()
export class ChatbotController {
    constructor(private readonly chatUseCase: ChatUseCase) {}

    @Get('chat')
    async chat(@Query() query: ChatParameters): Promise<ChatbotResult> {
        return await this.chatUseCase.execute(query);
    }
}
