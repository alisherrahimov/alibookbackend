import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Response } from 'src/utils/response';

@Injectable()
export class FileService {
  constructor(private prisma: PrismaService) {}
  async uploadFile(files: {
    pdf?: Express.Multer.File[];
    image?: Express.Multer.File[];
    user_image?: Express.Multer.File[];
  }): Promise<any> {
    let pdf_id: string = '',
      image_id: string = '',
      user_image_id: string = '';
    try {
      if (files.pdf) {
        const data = await this.prisma.pdf.create({
          data: {
            url: files.pdf[0].path,
          },
        });
        pdf_id = data.id;
      }
      if (files.image) {
        const data = await this.prisma.bookImage.create({
          data: {
            url: files.image[0].path,
          },
        });
        image_id = data.id;
      }
      if (files.user_image) {
        const data = await this.prisma.userImage.create({
          data: {
            url: files.user_image[0].path,
          },
        });
        user_image_id = data.id;
      }
      return { pdf_id, image_id, user_image_id };
    } catch (error) {
      return Response.error(error.message);
    }
  }
}
