import dialogflow, { SessionsClient } from '@google-cloud/dialogflow';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from 'src/environment-variables';
import { DialogFlowResult } from 'src/dialogflow-result';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DialogFlowService {
    private readonly sessionClient: SessionsClient;
    private readonly sessionPath: string;

    constructor(private configService: ConfigService) {
        this.sessionClient = new dialogflow.SessionsClient({
            credentials: {
                private_key: configService.get(EnvironmentVariables.GCP_DIALOGFLOW_PRIVATE_KEY),
                client_email: this.configService.get(EnvironmentVariables.GCP_DIALOGFLOW_CLIENT_EMAIL)
            },
        });

        this.sessionPath = this.sessionClient.projectAgentSessionPath(
          this.configService.get(EnvironmentVariables.GCP_DIALOGFLOW_PROJECT_ID),
          uuid()
        );
    }

    async getChatResponse(message: string): Promise<DialogFlowResult> {
        const request = {
            session: this.sessionPath,
            queryInput: {
                text: {
                    text: message,
                    languageCode: 'en-US'
                },
                languageCode: 'en-US'
            }
        };

        const [response] = await this.sessionClient.detectIntent(request);
        const result: DialogFlowResult = {
          result: response.queryResult?.fulfillmentText || `Sorry, I'm not ready to answer that`
        };

        return result;
    };
}
