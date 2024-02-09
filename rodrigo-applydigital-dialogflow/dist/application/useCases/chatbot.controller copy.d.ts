import { ChatbotService } from '../services/chatbot.service';
import { ChatParameters } from '../../domain/models/chat.parameters';
import { ChatbotResult } from '../../domain/models/chatbot.result';
export declare class ChatbotController {
    private readonly chatbotService;
    constructor(chatbotService: ChatbotService);
    chat(query: ChatParameters): Promise<ChatbotResult>;
}
