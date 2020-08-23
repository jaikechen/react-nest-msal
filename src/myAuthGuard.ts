import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { bearerStrategy } from 'azureBearer';


@Injectable()
export class MyAuthGuard extends AuthGuard(bearerStrategy) {
  handleRequest(err, user, info) {
    console.log('----------------------------------in auth guard')
    console.log(info)
    console.log(err)
    console.log(user)
    if (!info.preferred_username)
    {
      throw new UnauthorizedException()
    }
    console.log(info)
    return info;
  }
}
