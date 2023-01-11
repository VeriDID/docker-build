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

  @Get('dev/foo')
  getDevFoo(): string {
    return 'Hello from Dev Foo';
  }

  @Get('dev/bar')
  getDevBar(): string {
    return 'Hello from Dev Bar';
  }
}
