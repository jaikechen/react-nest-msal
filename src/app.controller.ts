import { Controller, Get, UseGuards } from '@nestjs/common';
import { MyAuthGuard } from 'myAuthGuard';
import { GetUser } from 'getUserDecorator';

@Controller('api/hello')
@UseGuards(MyAuthGuard)
export class AppController {
  @Get()
  getHello(@GetUser() user:any) {
    console.log(user)
    return 'Hello ' + user.name
  }
}
