import { Injectable } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';

const fakeUser = [
  { id: 1, userName: 'Dominik', password: 'password' },
  { id: 2, userName: 'Nicolas', password: 'password' },
];
@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateUser({ userName, password }: AuthPayloadDto) {
    const findUser = fakeUser.find((user) => user.userName === userName);
    if (!findUser) return null;
    if (password === findUser?.password) {
      const { password, ...user } = findUser;
      return this.jwtService.sign(user);
    }
  }
}
