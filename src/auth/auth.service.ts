import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  ageDto,
  genderDto,
  interestDto,
  loginDto,
  profileDto,
  verifyDto,
} from './dto/user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { ERROR_CODE } from 'src/utils/error.code';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async login(dto: loginDto) {
    const { phone } = dto;
    try {
      const user = await this.prisma.user.findFirst({
        where: { phone: phone },
      });
      if (user) {
        // this.send_sms();
        // sms service send sms
        await this.prisma.user.update({
          where: {
            phone: phone,
            account_id: user.account_id,
          },
          data: {
            code: 1111,
          },
        });
        return {
          success: true,
          error: null,
          time: Date.now(),
          data: user,
          // type 0 bulsa avvaldan bor user hisoblanadi
          type: 0,
        };
      } else {
        const account_id_generate = await this.generate_id();
        const unique_user = await this.prisma.user.create({
          data: {
            phone,
            account_id: account_id_generate.toString(),
            code: 1111,
          },
        });
        return {
          success: true,
          error: null,
          time: Date.now(),
          data: unique_user,
          // type bir bulsa toza user buladi
          type: 1,
        };
      }
    } catch (error) {
      throw new HttpException(error, 400);
    }
  }

  async verify(dto: verifyDto) {
    const { code, phone } = dto;
    try {
      const user = await this.prisma.user.findFirst({
        where: { phone: phone },
      });

      if (user) {
        const token = this.jwt.sign(user, {
          expiresIn: '1d',
          secret: process.env.SECRET_KEY,
        });

        if (code === user.code) {
          await this.prisma.user.update({
            where: { account_id: user.account_id },
            data: {
              active: true,
            },
          });
          return {
            success: true,
            error: null,
            time: Date.now(),
            data: {
              token,
            },
          };
        } else {
          return {
            success: false,
            error: ERROR_CODE.e1,
            time: Date.now(),
          };
        }
      } else {
        return {
          success: false,
          error: ERROR_CODE.e2,
          time: Date.now(),
        };
      }
    } catch (error) {
      throw new HttpException(error, 400);
    }
  }

  async post_gender(dto: genderDto) {
    try {
      const user = await this.prisma.user.update({
        where: {
          id: dto.id,
        },
        data: {
          gender: dto.type,
        },
      });
      return {
        data: user,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async post_age(dto: ageDto) {
    const { age, id } = dto;
    try {
      const user = await this.prisma.user.update({
        where: {
          id: id,
        },
        data: {
          age: age,
        },
      });
      return {
        data: user,
      };
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async post_interest(dto: interestDto) {
    const { ids } = dto;
    try {
      const data = await this.prisma.user.
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  async post_set_profile(dto: profileDto) {
    try {
    } catch (error) {}
  }

  async send_sms(phone: string, message: string) {
    const text = `Alibook ilovasi - ${4000}.
                   kodni hech kimga bermang. `;
  }

  async generate_id() {
    return Math.floor(performance.now() * 10000000000000) + '';
  }
}
