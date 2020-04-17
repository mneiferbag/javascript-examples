import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<html>' +
             '<body>' +
               '<p><a href="/product">Goto product</a></p>' + 
             '</body>' +
           '</html>';
  }
}
