import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DialogFlowController } from './dialogflow.controller';
import { DialogFlowService } from './dialogflow.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
    imports: [
      ConfigModule.forRoot(),
      CacheModule.register({
        isGlobal: true
      })
    ],
    controllers: [ AppController, DialogFlowController, UserController ],
    providers: [ AppService, DialogFlowService, UserService ],
})
export class AppModule {}
