import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from '../auth/auth.module';

import { Column } from '../columns/columns.entity';

import { BoardsModule } from '../boards/boards.module';
import { OrderColumnsService } from './orderColumn.service';
import { OrderColumnsController } from './orderColumn.controller';

@Module({
  providers: [OrderColumnsService],
  controllers: [OrderColumnsController],
  imports: [AuthModule, BoardsModule, TypeOrmModule.forFeature([Column])],
  exports: [OrderColumnsService],
})
export class OrderColumnsModule {}
