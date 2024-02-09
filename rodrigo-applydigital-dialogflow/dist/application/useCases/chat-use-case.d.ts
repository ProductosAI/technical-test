import { ChatbotService } from '../services/chatbot.service';
import { ChatParameters } from '../../domain/models/chat.parameters';
import { ChatbotResult } from '../../domain/models/chatbot.result';
import { UseCase } from './use-case';
export declare class ChatUseCase implements UseCase<ChatParameters, ChatbotResult> {
    private readonly chatbotService;
    constructor(chatbotService: ChatbotService);
    execute(request: ChatParameters): Promise<ChatbotResult>;
}
