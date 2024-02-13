import { Test, TestingModule } from '@nestjs/testing';
import { ChatbotController } from '../chatbot.controller';
import { ChatbotService } from '../../../domain/services/chatbot.service';
import { ChatUseCase } from '../../../domain/useCases/chat-use-case';
import { ChatbotDataSource } from '../../../data/interfaces/data-sources/chatbot';
import { DialogFlowDataSource } from '../../../data/data-sources/dialogflow';
import { ConfigModule } from '@nestjs/config';
import { IChatUseCase } from '../../../domain/interfaces/useCases/chat-use-case';
import { ChatParameters } from '../../../domain/models/chat.parameters';
import { ChatbotResult } from '../../../domain/models/chatbot-result';
import { IChatbotService } from '../../../domain/interfaces/services/chatbot.service';

class MockChatUseCase implements IChatUseCase {
  execute(contact: ChatParameters): Promise<ChatbotResult> {
      throw new Error("Method not implemented.");
  }
}

describe('ChatbotController', () => {
  describe('root', () => {
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
          {
            provide: IChatUseCase,
            useClass: ChatUseCase,
          },
          {
            provide: IChatbotService,
            useClass: ChatbotService,
          },
        ]
      }).compile();

      chatbotController = app.get<ChatbotController>(ChatbotController);
    });
    it('should return something', async () => {
      const res = await chatbotController.chat({ message: 'hey'});
      expect(res.result).not.toBeNull();
    });
  });

  describe('ChatbotController mock useCase', () => {
    let chatbotController: ChatbotController;
    let mockChatUseCase: MockChatUseCase;
  
    beforeAll(async () => {
      mockChatUseCase = new MockChatUseCase();
    });
  
    beforeEach(async () => {
      chatbotController = new ChatbotController(mockChatUseCase);
    });
  
    describe('root', () => {
      it('should return expected data', async () => {
        const expectedData = new ChatbotResult('Hi!');
        jest.spyOn(mockChatUseCase, 'execute').mockImplementation(() => Promise.resolve(expectedData));
  
        const res = await chatbotController.chat({ message: 'hey'});
        expect(res.result).not.toBeNull();
        expect(mockChatUseCase.execute).toHaveBeenCalled();
        expect(res).toStrictEqual(expectedData);
      });
    });
  });
});

