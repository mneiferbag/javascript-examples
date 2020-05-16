import { Controller, Get, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
    @Get()
    getProduct(): string {
      return '<html>' +
               '<body>' +
                 '<form action="/product" method="post" autocomplete="off">' + 
                   '<p>My product</p>' + 
                   '<button type="submit" name="addToCart" value="PRD-01">Add to cart</button>' +
                 '</form>' +
               '</body>' +
             '</html>';
    }

    @Post()
    orderProduct(): string {
      return '<html>' +
               '<body>' +
                 '<p>Product added to cart</p>' + 
                 '<p><a href="/cart">Goto cart</a></p>' + 
               '</body>' +
             '</html>';
    }
}
