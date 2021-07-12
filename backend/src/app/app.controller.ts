import { Controller, Get } from '@nestjs/common';
import { AppService as AppService } from './app.service';
import { WelcomeApi } from './welcome.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): WelcomeApi {
    return this.appService.getHello();
  }
}
