import dialogflow, { SessionsClient } from '@google-cloud/dialogflow';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvironmentVariables } from 'src/environment-variables';
import { ChatbotResult } from 'src/domain/models/chatbot.result';
import { v4 as uuid } from 'uuid';
import { ChatbotDataSource } from '../interfaces/data-sources/chatbot';
import { ChatParameters } from 'src/domain/models/chat.parameters';

@Injectable()
export class DialogFlowDataSource implements ChatbotDataSource {
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

    async chat(query: ChatParameters): Promise<ChatbotResult> {
        const request = {
            session: this.sessionPath,
            queryInput: {
                text: {
                    text: query.message,
                    languageCode: 'en-US'
                },
                languageCode: 'en-US'
            }
        };

        const [response] = await this.sessionClient.detectIntent(request);
        const result: ChatbotResult = {
          result: response.queryResult?.fulfillmentText || `Sorry, I'm not ready to answer that`
        };

        return result;
    }
}
