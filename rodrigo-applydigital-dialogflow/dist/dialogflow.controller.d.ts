import { DialogFlowService } from './dialogflow.service';
import { ChatParameters } from './chat.parameters';
import { DialogFlowResult } from './dialogflow-result';
export declare class DialogFlowController {
    private readonly dialogFlowService;
    constructor(dialogFlowService: DialogFlowService);
    chat(query: ChatParameters): Promise<DialogFlowResult>;
}
