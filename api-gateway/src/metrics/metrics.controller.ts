import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { MetricsService } from './metrics.service';
import { MetricDto } from './dto/metric.dto';
import { BasicAuthGuard } from '../auth/basic-auth.guard';

@Controller('admin/metrics')
@ApiTags('metrics')
export class MetricsController {
    constructor(private readonly metricsService: MetricsService) {}

    @Get()
    @ApiOkResponse({
        description: 'List of metrics',
        type: [MetricDto],
    })
    @UseGuards(BasicAuthGuard)
    async findall(): Promise<MetricDto[]> {
        const metrics = await this.metricsService.findAll();
        return metrics.map((metric: any) => new MetricDto(metric));
    }
}
