import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { FileController } from './file/file.controller';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    PrismaModule,
    MulterModule.register({
      dest: 'public',
      limits: { files: 10 },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..'),
    }),
    AuthModule,
    FileModule,
  ],
  controllers: [AppController, FileController],
  providers: [AppService],
})
export class AppModule { }
