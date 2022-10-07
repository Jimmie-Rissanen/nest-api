import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }
  getSomethingElse(): string {
    return 'Another World to welcome';
  }
}
