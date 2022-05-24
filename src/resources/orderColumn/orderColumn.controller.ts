import { Body, Controller, HttpCode, HttpStatus, Put, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

import { OrderColumDto } from './dto/update-column.dto';

import { AuthGuard } from '../auth/jwt-auth.guard';
import { OrderColumnsService } from './orderColumn.service';

@ApiTags('OrderColumn')
@ApiBearerAuth('token')
@Controller('/order/columns')
@UseGuards(AuthGuard)
export class OrderColumnsController {
  constructor(private readonly service: OrderColumnsService) {}
  @ApiOperation({ summary: 'Update column order' })
  @ApiResponse({ status: 200 })
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() order: OrderColumDto): Promise<void> {
    return this.service.update(order);
  }
}
