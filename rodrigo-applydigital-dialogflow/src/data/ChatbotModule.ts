import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { ChatbotDataSource } from './interfaces/data-sources/chatbot';
import { DialogFlowDataSource } from '../data/data-sources/dialogflow';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  providers: [
    {
      provide: ChatbotDataSource,
      useClass: DialogFlowDataSource,
    }
  ],
  exports: [
    {
      provide: ChatbotDataSource,
      useClass: DialogFlowDataSource,
    },
  ],
})
export class ChatbotModule {}
