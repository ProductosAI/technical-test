import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ChatbotController } from './controllers/chatbot.controller';
import { ChatbotService } from '../domain/services/chatbot.service';
import { UserController } from './controllers/user.controller';
import { ChatbotModule } from '../data/ChatbotModule';
import { ChatUseCase } from '../domain/useCases/chat-use-case';
import { UserService } from '../domain/services/user.service';
import { DatabaseModule } from '../data/DatabaseModule';
import { UserDataSource } from '../data/data-sources/user/user-data-source';
import { GetUserUseCase } from '../domain/useCases/get-user-use-case';
import { SetUserUseCase } from '../domain/useCases/set-user-use-case';

@Module({
    imports: [
      ConfigModule.forRoot(),
      ChatbotModule,
      DatabaseModule
    ],
    controllers: [
      ChatbotController,
      UserController
    ],
    providers: [
      ChatUseCase,
      ChatbotService,
      UserService,
      UserDataSource,
      GetUserUseCase,
      SetUserUseCase
    ],
})
export class AppModule {}
