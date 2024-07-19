import {
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

import { diskStorage } from 'multer';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(
    FileFieldsInterceptor(
      [{ name: 'pdf' }, { name: 'image' }, { name: 'user_image' }],
      {
        storage: diskStorage({
          destination: (req, file, cb) => {
            if (file.fieldname === 'pdf') {
              cb(null, 'public/pdf');
            }
            if (file.fieldname === 'image') {
              cb(null, 'public/image');
            }
            if (file.fieldname === 'user_image') {
              cb(null, 'uploads/user_image');
            }
          },
          filename: (req, file, cb) => {
            if (file.fieldname === 'pdf') {
              const uniqueSuffix =
                Date.now() + '-' + Math.round(Math.random() * 1e9);
              cb(null, `${uniqueSuffix}.pdf`);
            }
            if (file.fieldname === 'image') {
              const uniqueSuffix =
                Date.now() + '-' + Math.round(Math.random() * 1e9);
              cb(null, `${uniqueSuffix}.jpg`);
            }
            if (file.fieldname === 'user_image') {
              const uniqueSuffix =
                Date.now() + '-' + Math.round(Math.random() * 1e9);
              cb(null, `${uniqueSuffix}.jpg`);
            }
          },
        }),
      },
    ),
  )
  async uploadFile(
    @UploadedFiles()
    files: {
      pdf?: Express.Multer.File[];
      image?: Express.Multer.File[];
      user_image?: Express.Multer.File[];
    },
  ) {
    return this.fileService.uploadFile(files);
  }
}
