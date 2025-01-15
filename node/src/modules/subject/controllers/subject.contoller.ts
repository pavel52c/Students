import { Body, Controller, Get, Post } from '@nestjs/common';
import { SubjectService } from '../services/subject.service';
import { SubjectEntity } from '../entities/subject.entitie';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async findAll(): Promise<SubjectEntity[]> {
    return await this.subjectService.findAll();
  }
}
