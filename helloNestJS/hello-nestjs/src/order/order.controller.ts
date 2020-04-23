import { Controller, Get } from '@nestjs/common';

@Controller('order')
export class OrderController {
    @Get()
    getOrder(): string {
      return '{"status":"NEW"}';
    }
}
