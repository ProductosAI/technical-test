import { ChatbotResult } from 'src/domain/models/chatbot.result';
import { ChatParameters } from '../../domain/models/chat.parameters';
import { ChatbotDataSource } from '../../data/interfaces/data-sources/chatbot';
export declare class ChatbotService {
    private chatbotDataSource;
    constructor(chatbotDataSource: ChatbotDataSource);
    chat(query: ChatParameters): Promise<ChatbotResult>;
}
