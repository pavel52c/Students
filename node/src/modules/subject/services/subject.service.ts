import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubjectEntity } from '../entities/subject.entitie';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(SubjectEntity)
    private readonly subjectRepository: Repository<SubjectEntity>,
  ) {}

  async findAll(): Promise<SubjectEntity[]> {
    return await this.subjectRepository.find();
  }

  async find(id: SubjectEntity['id']) {
    return await this.subjectRepository.find({ where: { id } });
  }
}
