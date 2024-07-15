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

@Module({
  imports: [PrismaModule, AuthModule, BookModule, UserModule],
  controllers: [AppController, AuthController, BookController, UserController],
  providers: [AppService, PrismaService, AuthService, BookService, UserService],
})
export class AppModule {}
