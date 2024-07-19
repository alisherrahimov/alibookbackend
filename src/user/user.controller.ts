import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInfoDto } from './dto/user.info.dto';
import { Request } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Add the following methods
  @Post('info')
  async askInfo(@Body() body: UserInfoDto, @Req() req) {
    return await this.userService.askInfo(body, req.user_id);
  }

  @Get('me')
  async me(@Req() req: Request) {
    return await this.userService.me(req.user_id);
  }

  @Get('update-token')
  async updateToken(@Req() req: Request) {
    return await this.userService.updateToken(req.user_id);
  }
}
