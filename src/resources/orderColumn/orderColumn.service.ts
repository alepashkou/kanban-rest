import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { OrderColumDto } from './dto/update-column.dto';
import { Column } from '../columns/columns.entity';

import { BoardsService } from '../boards/boards.service';

@Injectable()
export class OrderColumnsService {
  constructor(
    @InjectRepository(Column) private columnsRepository: Repository<Column>,
    private boardRepository: BoardsService,
  ) {}

  async update(order: OrderColumDto): Promise<void> {
    order.columns.forEach(async (el) => {
      const column = (await this.columnsRepository.findOne({ where: { id: el.id } })) as Column;
      if (!column) {
        throw new HttpException('Column was not founded!', HttpStatus.NOT_FOUND);
      }
      column.order = el.order;
      await column.save();
    });
  }
}
