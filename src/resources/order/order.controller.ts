import { Body, Controller, HttpCode, HttpStatus, Put, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

import { UpdateTaskOrder } from './dto/update-tasks.dto';

import { AuthGuard } from '../auth/jwt-auth.guard';
import { OrderService } from './order.service';

@ApiTags('Order')
@ApiBearerAuth('token')
@Controller('/order/tasks/')
@UseGuards(AuthGuard)
export class OrderController {
  constructor(private readonly orderService: OrderService) {}
  @ApiOperation({ summary: 'Update task' })
  @ApiResponse({ status: 200 })
  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() taskOrder: UpdateTaskOrder): Promise<void> {
    return this.orderService.update(taskOrder);
  }
}
