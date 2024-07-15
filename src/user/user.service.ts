import { Injectable } from '@nestjs/common';
import { UserInfoDto } from './dto/user.info.dto';
import { Response } from 'src/utils/response';

@Injectable()
export class UserService {
  async askInfo(body: UserInfoDto) {
    return Response.success(body);
  }

  async me() {
    return Response.success({
      id: 1,
      name: 'John Doe',
      email: '',
    });
  }

  async updateToken() {
    return Response.success({
      token: 'new token',
    });
  }
}
