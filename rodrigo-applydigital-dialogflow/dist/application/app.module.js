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
const config_1 = require("@nestjs/config");
const chatbot_controller_1 = require("./controllers/chatbot.controller");
const chatbot_service_1 = require("./services/chatbot.service");
const user_controller_1 = require("./controllers/user.controller");
const ChatbotModule_1 = require("../data/ChatbotModule");
const chat_use_case_1 = require("./useCases/chat-use-case");
const user_service_1 = require("./services/user.service");
const DatabaseModule_1 = require("../data/DatabaseModule");
const user_data_source_1 = require("../data/data-sources/user/user-data-source");
const get_user_use_case_1 = require("./useCases/get-user-use-case");
const set_user_use_case_1 = require("./useCases/set-user-use-case");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            ChatbotModule_1.ChatbotModule,
            DatabaseModule_1.DatabaseModule
        ],
        controllers: [
            chatbot_controller_1.ChatbotController,
            user_controller_1.UserController
        ],
        providers: [
            chat_use_case_1.ChatUseCase,
            chatbot_service_1.ChatbotService,
            user_service_1.UserService,
            user_data_source_1.UserDataSource,
            get_user_use_case_1.GetUserUseCase,
            set_user_use_case_1.SetUserUseCase
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map