import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { UpdateTaskOrder } from './dto/update-tasks.dto';

import { Task } from './order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>) {}

  async update(body: UpdateTaskOrder): Promise<void> {
    body.tasks.forEach(async (el) => {
      const task = (await this.tasksRepository.findOne({ where: { id: el.id } })) as Task;
      if (!task) {
        throw new HttpException('Task was not founded!', HttpStatus.NOT_FOUND);
      }
      task.order = el.order;
      await task.save();
    });
  }
}
