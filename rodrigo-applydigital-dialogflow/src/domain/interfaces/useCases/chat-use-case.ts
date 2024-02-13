import { ChatParameters } from '../../models/chat.parameters';
import { ChatbotResult } from '../../models/chatbot-result';
import { IUseCase } from './use-case';

export abstract class IChatUseCase extends IUseCase<ChatParameters, ChatbotResult> {
}