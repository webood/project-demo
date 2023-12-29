import {
  Controller,
  Get,
  Req,
  Post,
  Header,
  HttpCode,
  Redirect,
} from '@nestjs/common';
import { Request } from 'express';

// 装饰器
@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }

  @Post() // 请求方式
  @HttpCode(0) // 响应码
  @Header('Cache-Control', 'none') // 相应头信息
  @Redirect('https://nestjs.com', 301) // 重定向
  create(): string {
    return 'This action adds a new cat';
  }
}
