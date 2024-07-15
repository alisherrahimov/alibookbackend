import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { OtpDto } from './dto/otp.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  async login(@Body() body: LoginDto) {
    return await this.authService.login(body);
  }

  @Post('send-otp')
  @HttpCode(200)
  async sendOtp(@Body() body: OtpDto) {
    return await this.authService.sendOtp(body);
  }

  @Post('verify-otp')
  @HttpCode(200)
  async verifyOtp(@Body() body: OtpDto) {
    return await this.authService.verifyOtp(body);
  }
}
