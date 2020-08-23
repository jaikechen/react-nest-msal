import { Controller, Get, UseGuards } from '@nestjs/common';
import { MyAuthGuard } from 'myAuthGuard';

@Controller('api/hello')
@UseGuards(MyAuthGuard)
export class AppController {
  @Get()
  getHello() {
    return 'Hello world'
  }
}
