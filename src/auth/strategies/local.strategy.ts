import { PassportStrategy } from '@nestjs/passport';

// use to authen based on information account like (username/email) and password.Those information send directly from client to sever through request HTTP (regular POST)
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
// (local) Tên này được sử dụng để xác định chiến lược khi bạn cấu hình
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  constructor(private authService: AuthService) {
    super();
  }

  validate(username: string, password: string) {
    console.log('run local two');

    const user = this.authService.validateUser({ username, password });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
