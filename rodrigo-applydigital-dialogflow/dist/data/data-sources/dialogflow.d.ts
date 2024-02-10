import { ConfigService } from '@nestjs/config';
import { ChatbotResult } from '../../domain/models/chatbot.result';
import { ChatbotDataSource } from '../interfaces/data-sources/chatbot';
import { ChatParameters } from '../../domain/models/chat.parameters';
export declare class DialogFlowDataSource implements ChatbotDataSource {
    private configService;
    private readonly sessionClient;
    private readonly sessionPath;
    constructor(configService: ConfigService);
    chat(query: ChatParameters): Promise<ChatbotResult>;
}
