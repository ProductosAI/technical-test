import { ChatParameters } from '../../../domain/models/chat.parameters';
import { ChatbotResult } from '../../../domain/models/chatbot-result';

export abstract class ChatbotDataSource {
//export interface ChatbotDataSource {
    abstract chat(query: ChatParameters): Promise<ChatbotResult>;
}