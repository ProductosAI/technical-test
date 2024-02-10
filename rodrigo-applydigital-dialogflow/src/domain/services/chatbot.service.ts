import { Injectable } from '@nestjs/common';
import { ChatbotResult } from 'src/domain/models/chatbot-result';
import { ChatParameters } from '../models/chat.parameters';
import { ChatbotDataSource } from '../../data/interfaces/data-sources/chatbot';
import { IChatbotService } from '../interfaces/services/chatbot.service';

@Injectable()
export class ChatbotService implements IChatbotService {
    constructor(private chatbotDataSource: ChatbotDataSource) {}

    async chat(query: ChatParameters): Promise<ChatbotResult> {
        return this.chatbotDataSource.chat(query);
    };
}
