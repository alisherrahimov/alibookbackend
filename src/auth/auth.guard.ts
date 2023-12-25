import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwt: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers?.authorization;
    try {
      const user = this.jwt.decode(token);
      request.user = user;
      return true;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
