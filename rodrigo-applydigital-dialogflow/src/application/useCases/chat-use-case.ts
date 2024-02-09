import { Injectable } from '@nestjs/common';
import { ChatbotService } from '../services/chatbot.service';
import { ChatParameters } from '../../domain/models/chat.parameters';
import { ChatbotResult } from '../../domain/models/chatbot.result';
import { UseCase } from './use-case';

@Injectable()
export class ChatUseCase implements UseCase<ChatParameters, ChatbotResult> {
    constructor(private readonly chatbotService: ChatbotService) {}

    async execute(request: ChatParameters): Promise<ChatbotResult> {
        return await this.chatbotService.chat(request);
    }
}
