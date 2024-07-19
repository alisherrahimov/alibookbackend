import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { BookController } from './book/book.controller';
import { BookModule } from './book/book.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { AuthService } from './auth/auth.service';
import { BookService } from './book/book.service';
import { UserService } from './user/user.service';
import { FileController } from './file/file.controller';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { FileService } from './file/file.service';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    BookModule,
    UserModule,
    FileModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
      exclude: ['image', 'pdf', 'user_image'],
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    BookController,
    UserController,
    FileController,
  ],

  providers: [
    AppService,
    PrismaService,
    AuthService,
    FileService,
    BookService,
    UserService,
  ],
})
export class AppModule {}
