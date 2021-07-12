import { Injectable } from '@nestjs/common';
import { WelcomeApi } from './welcome.interface';

@Injectable()
export class AppService {
  getHello(): WelcomeApi {
    return {
      name: 'Welcome Your destination API!',
      version: '1.0.0'
    };
  }
}
