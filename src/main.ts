import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import logger from './utils/logger';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpException, ValidationPipe } from '@nestjs/common';
import { Response } from './utils/response';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) => {
        return new HttpException(Response.error(errors), 400);
      },
    }),
  );
  app.setGlobalPrefix('api');
  const config = new DocumentBuilder()
    .setTitle('AliBook APIs')
    .setDescription('The AliBook API description')
    .setVersion('1.0')
    .addTag('books')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(8080);

  logger.success('\nApp is running at http://localhost:8080/api', '🚀', '\n');
  logger.success(
    'Swagger API documentation is available at http://localhost:8080/api/docs',
    '📚',
    '\n',
  );
  logger.info('Press Ctrl+C to stop', '🛑', '\n');
}
bootstrap();
