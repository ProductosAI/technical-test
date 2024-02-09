import { Controller, Get, Query } from '@nestjs/common';
import { DialogFlowService } from './dialogflow.service';
import { ChatParameters } from './chat.parameters';
import { DialogFlowResult } from './dialogflow-result';

@Controller()
export class DialogFlowController {
    constructor(private readonly appService: DialogFlowService) {}

    @Get('chat')
    async chat(@Query() query: ChatParameters): Promise<DialogFlowResult> {
        return await this.appService.getChatResponse(query.message);
    }
}
