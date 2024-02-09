import { Controller, Get, Query } from '@nestjs/common';
import { DialogFlowService } from './dialogflow.service';
import { ChatParameters } from './chat.parameters';
import { DialogFlowResult } from './dialogflow-result';

@Controller()
export class DialogFlowController {
    constructor(private readonly dialogFlowService: DialogFlowService) {}

    @Get('chat')
    async chat(@Query() query: ChatParameters): Promise<DialogFlowResult> {
        return await this.dialogFlowService.getChatResponse(query.message);
    }
}
