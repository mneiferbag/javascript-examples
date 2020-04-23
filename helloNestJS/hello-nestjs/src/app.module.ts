import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { CartController } from './cart/cart.controller';
import { OrderController } from './order/order.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductController, CartController, OrderController],
  providers: [AppService],
})
export class AppModule {}
