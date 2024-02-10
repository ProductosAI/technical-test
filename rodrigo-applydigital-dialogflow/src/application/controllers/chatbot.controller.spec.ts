import { Test, TestingModule } from '@nestjs/testing';
import { ChatbotController } from './chatbot.controller';
import { ChatbotService } from '../../domain/services/chatbot.service';
import { ChatUseCase } from '../../domain/useCases/chat-use-case';
import { ChatbotDataSource } from '../../data/interfaces/data-sources/chatbot';
import { DialogFlowDataSource } from '../../data/data-sources/dialogflow';
import { ConfigModule } from '@nestjs/config';

describe('ChatbotController', () => {
  let chatbotController: ChatbotController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot()
      ],
      controllers: [
        ChatbotController
      ],
      providers: [
        {
          provide: ChatbotDataSource,
          useClass: DialogFlowDataSource,
        },
        ChatUseCase,
        ChatbotService
      ]
    }).compile();

    chatbotController = app.get<ChatbotController>(ChatbotController);
  });

  describe('root', () => {
    it('should return something', async () => {
      const res = await chatbotController.chat({ message: 'hey'});
      expect(res.result).not.toBeNull();
    });
  });
});
