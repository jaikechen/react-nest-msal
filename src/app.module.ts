import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ServeStaticModule} from '@nestjs/serve-static';
import {PassportModule} from '@nestjs/passport';
import { join } from 'path';
import { bearerStrategy } from 'azureBearer';
import { MyAuthGuard } from 'myAuthGuard';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'build')
    }),
    PassportModule.register({defaultStrategy :bearerStrategy})
  ],
  controllers: [AppController],
  providers: [MyAuthGuard],
})
export class AppModule {}
