"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const chatbot_1 = require("../data/interfaces/data-sources/chatbot");
const dialogflow_1 = require("../data/data-sources/dialogflow");
let ChatbotModule = class ChatbotModule {
};
exports.ChatbotModule = ChatbotModule;
exports.ChatbotModule = ChatbotModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            ChatbotModule
        ],
        providers: [
            {
                provide: chatbot_1.ChatbotDataSource,
                useClass: dialogflow_1.DialogFlowDataSource,
            }
        ],
        exports: [
            {
                provide: chatbot_1.ChatbotDataSource,
                useClass: dialogflow_1.DialogFlowDataSource,
            },
        ],
    })
], ChatbotModule);
//# sourceMappingURL=ChatbotModule.js.map