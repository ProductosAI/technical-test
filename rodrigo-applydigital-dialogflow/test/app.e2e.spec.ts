import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/application/app.module';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

      app = moduleFixture.createNestApplication();
      app.useGlobalPipes(new ValidationPipe());
      await app.init();
    });

    afterEach(async () => {
        app.close();
    });

    it('success', async () => {
      const res = await request(app.getHttpServer())
          .get('/chat?message=hey');

      expect(res.status).toBe(200);
      expect(res.body.result).not.toBeNull();
      expect(typeof res.body.result).toEqual('string');
    });

    it('missing parameter', async () => {
        const res = await request(app.getHttpServer())
          .get('/chat?msg=hey');

        expect(res.status).toBe(400);
        expect(res.body.message).toContainEqual('message should not be empty');
    });
});
