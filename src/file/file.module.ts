import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [FileService, PrismaService],
})
export class FileModule {}
