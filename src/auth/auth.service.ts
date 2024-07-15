import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { Response } from 'src/utils/response';
import { OtpDto } from './dto/otp.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(body: LoginDto) {
    return Response.success(body);
  }

  async sendOtp(body: OtpDto) {
    return Response.success(body);
  }

  async verifyOtp(body: OtpDto) {
    return Response.success(body);
  }

  private async generateOtp() {
    return Math.floor(1000 + Math.random() * 9000);
  }

  private async sendOtpToPhone(phone: number, otp: number) {
    return `OTP: ${otp}`;
  }
}
