import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { ChatbotController } from './controllers/chatbot.controller';
import { ChatbotService } from './services/chatbot.service';
import { UserController } from '../user.controller';
import { ChatbotModule } from '../data/ChatbotModule';
import { ChatUseCase } from './useCases/chat-use-case';
import { UserService } from './services/user.service';
import { DatabaseModule } from 'src/data/DatabaseModule';
import { UserDataSource } from 'src/data/data-sources/user/user-data-source';

@Module({
    imports: [
      ConfigModule.forRoot(),
      CacheModule.register({
        isGlobal: true
      }),
      ChatbotModule,
      DatabaseModule
    ],
    controllers: [ AppController, ChatbotController, UserController ],
    providers: [ AppService, ChatUseCase, ChatbotService, UserService, UserDataSource ],
})
export class AppModule {}
