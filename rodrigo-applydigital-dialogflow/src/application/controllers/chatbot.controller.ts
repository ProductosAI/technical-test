import { Controller, Get, Query } from '@nestjs/common';
import { ChatbotService } from '../services/chatbot.service';
import { ChatParameters } from '../../domain/models/chat.parameters';
import { ChatbotResult } from '../../domain/models/chatbot.result';

@Controller()
export class ChatbotController {
    constructor(private readonly chatbotService: ChatbotService) {}

    @Get('chat')
    async chat(@Query() query: ChatParameters): Promise<ChatbotResult> {
        return await this.chatbotService.getChatResponse(query);
    }
}
