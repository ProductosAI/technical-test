import { Injectable } from '@nestjs/common';
import { ChatbotService } from '../services/chatbot.service';
import { ChatParameters } from '../models/chat.parameters';
import { ChatbotResult } from '../models/chatbot-result';
import { UseCase } from './use-case';

@Injectable()
export class ChatUseCase implements UseCase<ChatParameters, ChatbotResult> {
    constructor(private readonly service: ChatbotService) {}

    async execute(request: ChatParameters): Promise<ChatbotResult> {
        return await this.service.chat(request);
    }
}