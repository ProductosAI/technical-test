import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe(
            { transform: true}
        )
    );

    const config = new DocumentBuilder()
        .setTitle(`Rodrigo's Apply Digital technical test`)
        .setDescription('API created to allow a conversation with DialogFlow chatbot and storing users in memory.')
        .setVersion('1.0')
        .build();
        
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
