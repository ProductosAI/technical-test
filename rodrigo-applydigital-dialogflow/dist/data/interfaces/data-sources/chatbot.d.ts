import { ChatParameters } from '../../../domain/models/chat.parameters';
import { ChatbotResult } from '../../../domain/models/chatbot.result';
export declare abstract class ChatbotDataSource {
    abstract chat(query: ChatParameters): Promise<ChatbotResult>;
}
