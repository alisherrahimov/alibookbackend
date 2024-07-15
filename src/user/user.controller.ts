import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

import { UserInfoDto } from './dto/user.info.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // Add the following methods
  @Post('info')
  async askInfo(@Body() body: UserInfoDto) {
    return await this.userService.askInfo(body);
  }

  @Get('me')
  async me() {
    return await this.userService.me();
  }

  @Get('update-token')
  async updateToken() {
    return await this.userService.updateToken();
  }
}
