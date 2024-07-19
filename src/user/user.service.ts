import { Injectable } from '@nestjs/common';
import { UserInfoDto } from './dto/user.info.dto';
import { Response } from 'src/utils/response';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async askInfo(body: UserInfoDto, user_id: string) {
    try {
      const data = await this.prisma.user.update({
        where: {
          id: user_id,
        },
        data: {
          age: body.age,
          full_name: body.f_name,
          gender: body.gender,
          Category: {
            connect: body.genres.map((genre) => {
              return {
                id: genre,
              };
            }),
          },
        },
      });
      return Response.success(data);
    } catch (error) {
      return Response.error(error);
    }
  }

  async me(user_id: string) {
    try {
      const data = await this.prisma.user.findUnique({
        where: {
          id: user_id,
        },
      });
      return Response.success(data);
    } catch (error) {
      return Response.error(error);
    }
  }

  async updateToken(user_id: string) {
    try {
      const data = await this.prisma.user.findUnique({
        where: {
          id: user_id,
        },
      });
      const token = await this.jwt.signAsync(data, {
        expiresIn: '30d',
        secret: process.env.JWT_SECRET,
      });
      return Response.success(token);
    } catch (error) {
      return Response.error(error);
    }
  }
}
