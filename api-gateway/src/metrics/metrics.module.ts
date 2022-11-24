import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metric } from './entities/metric.entity';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [TypeOrmModule.forFeature([Metric]), AuthModule],
    providers: [MetricsService],
    exports: [MetricsService],
    controllers: [MetricsController]
  })
export class MetricsModule {}
