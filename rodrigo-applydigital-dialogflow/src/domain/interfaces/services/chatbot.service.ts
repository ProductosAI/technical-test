import { ChatbotResult } from '../../../domain/models/chatbot-result';
import { ChatParameters } from '../../models/chat.parameters';

export interface IChatbotService {
    chat(query: ChatParameters): Promise<ChatbotResult>;
}