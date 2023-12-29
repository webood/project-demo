import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
// 引入
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from '../entities/products.entity';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [TypeOrmModule.forFeature([Products])], // 导入并注册实体
})
export class ProductsModule {}
