import { Controller, Get, Query } from '@nestjs/common';
import { ChatParameters } from '../../domain/models/chat.parameters';
import { ChatbotResult } from '../../domain/models/chatbot-result';
import { IChatUseCase } from '../../domain/interfaces/useCases/chat-use-case';

@Controller()
export class ChatbotController {
    constructor(private readonly chatUseCase: IChatUseCase) {}

    @Get('chat')
    async chat(@Query() query: ChatParameters): Promise<ChatbotResult> {
        return await this.chatUseCase.execute(query);
    }
}
