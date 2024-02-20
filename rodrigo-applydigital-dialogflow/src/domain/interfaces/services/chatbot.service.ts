import { ChatbotResult } from '../../../domain/models/chatbot-result';
import { ChatParameters } from '../../models/chat.parameters';

export abstract class IChatbotService {
    abstract chat(query: ChatParameters): Promise<ChatbotResult>;
}