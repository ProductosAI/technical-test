"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const cache_manager_1 = require("@nestjs/cache-manager");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./controllers/app.controller");
const app_service_1 = require("./app.service");
const chatbot_controller_1 = require("./controllers/chatbot.controller");
const chatbot_service_1 = require("./services/chatbot.service");
const user_controller_1 = require("../user.controller");
const user_service_1 = require("../user.service");
const ChatbotModule_1 = require("../data/ChatbotModule");
const chat_use_case_1 = require("./useCases/chat-use-case");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            cache_manager_1.CacheModule.register({
                isGlobal: true
            }),
            ChatbotModule_1.ChatbotModule
        ],
        controllers: [app_controller_1.AppController, chatbot_controller_1.ChatbotController, user_controller_1.UserController],
        providers: [app_service_1.AppService, chat_use_case_1.ChatUseCase, chatbot_service_1.ChatbotService, user_service_1.UserService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map