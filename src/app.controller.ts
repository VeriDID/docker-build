import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('foo')
  getFoo(): string {
    return 'Hello from Foo';
  }

  @Get('bar')
  getBar(): string {
    return 'Hello from Bar';
  }

  @Get('admin')
  getAdmin(): string {
    return 'Hello from Admin User';
  }

  @Get('regular')
  getRegular(): string {
    return 'Hello from Regular User';
  }
}
