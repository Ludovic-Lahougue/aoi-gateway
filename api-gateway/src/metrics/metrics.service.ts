import { Injectable } from '@nestjs/common';
import { Metric } from './entities/metric.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MetricsService {
  constructor(
      @InjectRepository(Metric)
      private metricsRepository: Repository<Metric>,
    ) {}

    async create(time: number, path: string, method: string, userAgent: string): Promise<any> {
      return this.metricsRepository.save({
        date: new Date(),
        time: time,
        path: path,
        method: method,
        userAgent: userAgent
      });
    }

    async findAll(): Promise<Metric[]>{
      return this.metricsRepository.find();
    }
}
