import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['debug', 'log', 'warn'],
    cors: { origin: '*' },
  });

  app.use(morgan('dev'));

  const config = new DocumentBuilder()
    .setTitle('alibook backend apis')
    .setDescription('All apis')
    .setVersion('1.0')
    .addTag('alibook')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
