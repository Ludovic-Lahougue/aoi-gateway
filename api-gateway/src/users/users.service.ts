import { HttpService } from '@nestjs/axios';
import { Body, Injectable, Param } from '@nestjs/common';
import { map } from 'rxjs';
import { MetricsService } from 'src/metrics/metrics.service';
import { CreateUserDto } from '../../../service-user/src/users/dto/create-user.dto';
import { UpdateUserDto } from '../../../service-user/src/users/dto/update-user.dto';

@Injectable()
export class UsersService {
    constructor(
        private readonly httpService: HttpService,
        private readonly metricsService: MetricsService
        ) {}

    findAll(): any {
        let startTime = performance.now();
        let response = this.httpService.get('http://localhost:3001/users').pipe(map((response: any) => response.data));
        let endTime = performance.now();
        let time = endTime - startTime;
        this.metricsService.create(time, 'users', 'get', '');
        
        return response;
    }

    findOneById(id: number): any {
        let startTime = performance.now();
        let response = this.httpService.get(`http://localhost:3001/users/${id}`).pipe(map((response: any) => response.data));
        let endTime = performance.now();
        let time = endTime - startTime;
        this.metricsService.create(time, `users/${id}`, 'get', '');
        
        return response;
    }

    create(@Body() createUserDto: CreateUserDto,): any {
        let startTime = performance.now();
        let response = this.httpService.post(`http://localhost:3001/users`, createUserDto).pipe(map((response: any) => response.data));
        let endTime = performance.now();
        let time = endTime - startTime;
        this.metricsService.create(time, `users`, 'post', '');
        
        return response;
    }
    
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto,): any {
        let startTime = performance.now();
        let response = this.httpService.patch(`http://localhost:3001/users/${id}`, updateUserDto).pipe(map((response: any) => response.data));
        let endTime = performance.now();
        let time = endTime - startTime;
        this.metricsService.create(time, `users/${id}`, 'patch', '');
        
        return response;
    }

    delete(@Param('id') id: string): any {
        let startTime = performance.now();
        let response = this.httpService.delete(`http://localhost:3001/users/${id}`).pipe(map((response: any) => response.data));
        let endTime = performance.now();
        let time = endTime - startTime;
        this.metricsService.create(time, `users/${id}`, 'delete', '');
        
        return response;
    }
}
