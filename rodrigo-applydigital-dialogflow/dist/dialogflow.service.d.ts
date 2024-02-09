import { ConfigService } from '@nestjs/config';
import { DialogFlowResult } from 'src/dialogflow-result';
export declare class DialogFlowService {
    private configService;
    private readonly sessionClient;
    private readonly sessionPath;
    constructor(configService: ConfigService);
    getChatResponse(message: string): Promise<DialogFlowResult>;
}
