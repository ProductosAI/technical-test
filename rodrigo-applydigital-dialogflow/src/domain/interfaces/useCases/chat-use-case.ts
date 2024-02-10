import { ChatParameters } from '../../models/chat.parameters';
import { ChatbotResult } from '../../models/chatbot-result';
import { UseCase } from './use-case';

export interface ChatUseCase extends UseCase<ChatParameters, ChatbotResult> {
}