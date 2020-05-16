import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartController } from './cart/cart.controller';
import { OrderController } from './order/order.controller';
import { ProductController } from './product/product.controller';

@Module({
  imports: [],
  controllers: [AppController, CartController, OrderController, ProductController],
  providers: [AppService],
})
export class AppModule {}
