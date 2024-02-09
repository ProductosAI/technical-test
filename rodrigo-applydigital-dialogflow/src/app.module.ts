import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './application/controllers/app.controller';
import { AppService } from './app.service';
import { ChatbotController } from './application/controllers/chatbot.controller';
import { ChatbotService } from './application/services/chatbot.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ChatbotModule } from './data/ChatbotModule';

@Module({
    imports: [
      ConfigModule.forRoot(),
      CacheModule.register({
        isGlobal: true
      }),
      ChatbotModule
    ],
    controllers: [ AppController, ChatbotController, UserController ],
    providers: [ AppService, ChatbotService, UserService ],
})
export class AppModule {}
