import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DialogFlowController } from './dialogflow.controller';
import { DialogFlowService } from './dialogflow.service';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [AppController, DialogFlowController],
    providers: [AppService, DialogFlowService],
})
export class AppModule {}
