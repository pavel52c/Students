import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PerformanceService } from '../services/performance.service';
import { PerformanceEntity } from '../entities/performance.entitie';
import { FindBySessionDTO } from '../dto/FindBySessionDTO';
import { CreatePerformanceDTO } from '../dto/CreatePerformanceDTO';

@Controller('performances')
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Get()
  async findAll(): Promise<PerformanceEntity[]> {
    return await this.performanceService.findAll();
  }

  @Post('/create')
  async create(@Body() data: CreatePerformanceDTO) {
    return await this.performanceService.create(data);
  }

  @Get('/session')
  async getBySession(@Query() queryParams: FindBySessionDTO) {
    return this.performanceService.findByUserAndSession(queryParams);
  }
}
