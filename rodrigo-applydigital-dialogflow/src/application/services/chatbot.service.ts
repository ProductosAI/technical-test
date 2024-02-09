import { Injectable } from '@nestjs/common';
import { ChatbotResult } from 'src/domain/models/chatbot.result';
import { ChatParameters } from '../../domain/models/chat.parameters';
import { ChatbotDataSource } from '../../data/interfaces/data-sources/chatbot';

@Injectable()
export class ChatbotService {
    constructor(private chatbotDataSource: ChatbotDataSource) {}

    async getChatResponse(query: ChatParameters): Promise<ChatbotResult> {
        return this.chatbotDataSource.chat(query);
    };
}
