"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogFlowService = void 0;
const dialogflow_1 = require("@google-cloud/dialogflow");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const environment_variables_1 = require("../../environment-variables");
const uuid_1 = require("uuid");
let DialogFlowService = class DialogFlowService {
    constructor(configService) {
        this.configService = configService;
        this.sessionClient = new dialogflow_1.default.SessionsClient({
            credentials: {
                private_key: configService.get(environment_variables_1.EnvironmentVariables.GCP_DIALOGFLOW_PRIVATE_KEY),
                client_email: this.configService.get(environment_variables_1.EnvironmentVariables.GCP_DIALOGFLOW_CLIENT_EMAIL)
            },
        });
        this.sessionPath = this.sessionClient.projectAgentSessionPath(this.configService.get(environment_variables_1.EnvironmentVariables.GCP_DIALOGFLOW_PROJECT_ID), (0, uuid_1.v4)());
    }
    async getChatResponse(message) {
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
        const result = {
            result: response.queryResult?.fulfillmentText || `Sorry, I'm not ready to answer that`
        };
        return result;
    }
    ;
};
exports.DialogFlowService = DialogFlowService;
exports.DialogFlowService = DialogFlowService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], DialogFlowService);
//# sourceMappingURL=dialogflow.js.map