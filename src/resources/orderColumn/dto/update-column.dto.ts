import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsArray } from 'class-validator';

export interface Order {
  id: 'string';
  order: number;
}
export class OrderColumDto {
  @ApiProperty({ example: 'Done', description: 'Column title' })
  @IsArray()
  @IsNotEmpty()
  columns!: Order[];
}
