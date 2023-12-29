import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
// 引入数据库的及配置文件
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProductsModule } from './products/products.module';

@Module({
  controllers: [CatsController],
  providers: [],
  imports: [
    // 连接数据库
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '1994411g',
      database: 'user',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      synchronize: true, // 定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用)
    }),
    ProductsModule,
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
