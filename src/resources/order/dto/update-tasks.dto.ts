import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsArray } from 'class-validator';

export interface TaskOrderItem {
  id: string;
  order: number;
}
export class UpdateTaskOrder {
  @ApiProperty({ example: 'arrayOrder', description: 'arrayOrder' })
  @IsArray()
  @IsNotEmpty()
  readonly tasks!: TaskOrderItem[];
}
