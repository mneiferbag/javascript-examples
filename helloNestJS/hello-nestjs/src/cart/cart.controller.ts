import { Controller, Get, Post } from '@nestjs/common';

@Controller('cart')
export class CartController {
    @Get()
    getCart(): string {
      return '<html>' +
               '<body>' +
                 '<form action="/cart" method="post" autocomplete="off">' + 
                   '<p>My cart</p>' + 
                   '<button type="submit" name="cart" value="order">Order cart</button>' +
                 '</form>' +
               '</body>' +
             '</html>';
    }

    @Post()
    orderConfirmation(): string {
      return '<html>' +
               '<body>' +
                 '<p>Order confirmation numer ORD-0815</p>' + 
               '</body>' +
             '</html>';
    }
}
