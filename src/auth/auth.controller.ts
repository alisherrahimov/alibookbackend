import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import {
  ageDto,
  genderDto,
  interestDto,
  loginDto,
  profileDto,
  verifyDto,
} from './dto/user.dto';
import { AuthService } from './auth.service';
import { ResponseInterceptor } from 'src/utils/response';

@UseInterceptors(ResponseInterceptor)
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @Post('/login')
  async login(@Body() dto: loginDto) {
    return this.authService.login(dto);
  }

  @Post('/verify')
  async verify(@Body() dto: verifyDto) {
    return this.authService.verify(dto);
  }

  @Post('/gender')
  async post_gender(@Body() dto: genderDto) {
    return this.authService.post_gender(dto);
  }

  @Post('/age')
  async post_age(@Body() dto: ageDto) {
    return this.authService.post_age(dto);
  }

  @Post('/interest')
  async post_interest(@Body() dto: interestDto) {
    return this.authService.post_interest(dto);
  }

  @Post('/set-profile')
  async post_set_profile(@Body() dto: profileDto) {
    return this.authService.post_set_profile(dto);
  }
}
