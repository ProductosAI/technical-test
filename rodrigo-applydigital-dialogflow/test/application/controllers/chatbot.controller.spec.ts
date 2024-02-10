import { Test, TestingModule } from '@nestjs/testing';
import { ChatbotController } from '../../../src/application/controllers/chatbot.controller';
import { ChatbotService } from '../../../src/domain/services/chatbot.service';
import { ChatUseCase } from '../../../src/domain/useCases/chat-use-case';
import { ChatbotDataSource } from '../../../src/data/interfaces/data-sources/chatbot';
import { DialogFlowDataSource } from '../../../src/data/data-sources/dialogflow';
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
