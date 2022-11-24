import { ApiProperty } from '@nestjs/swagger';
import { Metric } from '../entities/metric.entity';

type MetricProperties = Required<MetricDto>;

export class MetricDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  date : Date;

  @ApiProperty()
  time : number;

  @ApiProperty()
  path : string;

  @ApiProperty()
  method : string;

  @ApiProperty()
  userAgent : string;

  constructor(value: Metric) {
    this.id = value.id ?? 0;
    this.date = value.date ?? new Date();
    this.time = value.time ?? 0;
    this.path = value.path ?? '';
    this.method = value.method ?? '';
    this.userAgent = value.userAgent ?? '';
  }
}
