import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('another')
  getSomethingElse(): string {
    return this.appService.getSomethingElse();
  }

  @Post('add')
  addGreeting(@Body() body) {
    return body;
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() body) {
    return `updates ${id}`;
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return `removes ${id}`;
  }
}
