import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from '../entities/products.entity';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  // 通过数据库查询产品list
  @Get('getList')
  getList(): Promise<Products[]> {
    return this.productsService.getList();
  }
  // 通过id查询产品
  @Get('getProductById')
  getProductById(@Query() query: any): Promise<object> {
    let id: number = parseInt(query.id);
    return this.productsService.getProductById(id);
  }
  // 增加产品
  @Post('addProduct')
  addProduct(@Body() body: any): Promise<object> {
    return this.productsService.addProduct(body);
  }
  // 更新产品
  @Post('updateProduct')
  updateProduct(@Body() body: any): Promise<object> {
    return this.productsService.updateProduct(body);
  }
  // 删除产品
  @Post('delProduct')
  delProduct(@Body() body: any): Promise<object> {
    return this.productsService.delProduct(body);
  }
}
