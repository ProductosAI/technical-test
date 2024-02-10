import { Injectable } from '@nestjs/common';
import { ChatParameters } from '../models/chat.parameters';
import { ChatbotResult } from '../models/chatbot-result';
import { IChatbotService } from '../interfaces/services/chatbot.service';
import { IChatUseCase } from '../interfaces/useCases/chat-use-case';

@Injectable()
export class ChatUseCase implements IChatUseCase {
    constructor(private readonly service: IChatbotService) {}

    async execute(request: ChatParameters): Promise<ChatbotResult> {
        return await this.service.chat(request);
    }
}