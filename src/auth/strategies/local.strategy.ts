import { PassportStrategy } from '@nestjs/passport';

// use to authen based on information account like (username/email) and password.Those information send directly from client to sever through request HTTP (regular POST)
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  validateUser(userName: string, password: string) {
    const user = this.authService.validateUser({ userName, password });
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
