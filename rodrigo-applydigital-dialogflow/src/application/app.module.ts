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
import { IChatUseCase } from '../domain/interfaces/useCases/chat-use-case';
import { IChatbotService } from '../domain/interfaces/services/chatbot.service';
import { IUserService } from '../domain/interfaces/services/user.service';
import { IUserDataSource } from '../data/interfaces/user/user-data-source';
import { IGetUserUseCase } from '../domain/interfaces/useCases/get-user-use-case';
import { ISetUserUseCase } from '../domain/interfaces/useCases/set-user-use-case';

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
      {
        provide: IChatbotService,
        useClass: ChatbotService,
      },
      {
        provide: IUserService,
        useClass: UserService,
      },
      {
        provide: IUserDataSource,
        useClass: UserDataSource,
      },
      {
        provide: IChatUseCase,
        useClass: ChatUseCase,
      },
      {
        provide: IGetUserUseCase,
        useClass: GetUserUseCase,
      },
      {
        provide: ISetUserUseCase,
        useClass: SetUserUseCase,
      }
    ],
})
export class AppModule {}
