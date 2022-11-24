import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MetricsModule } from '../metrics/metrics.module';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [HttpModule, MetricsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
