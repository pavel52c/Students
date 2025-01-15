import { Injectable, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PerformanceEntity } from '../entities/performance.entitie';
import { SubjectService } from '../../subject/services/subject.service';
import { UserService } from '../../user/services/user.service';
import { FindBySessionDTO } from '../dto/FindBySessionDTO';
import { CreatePerformanceDTO } from '../dto/CreatePerformanceDTO';

@Injectable()
export class PerformanceService {
  constructor(
    @InjectRepository(PerformanceEntity)
    private readonly performanceRepository: Repository<PerformanceEntity>,
    private readonly subjectService: SubjectService,
    private readonly userService: UserService,
  ) {}

  async findAll(): Promise<PerformanceEntity[]> {
    return await this.performanceRepository.find();
  }

  async create(data: CreatePerformanceDTO) {
    const user = await this.userService.find(data.student_id);
    const subject = await this.subjectService.find(data.subject_id);
    return await this.performanceRepository.save({
      subject_id: subject[0],
      student_id: user[0],
      mark: data.mark || 0,
      year: data.year || '',
      isWinterSession: data.isWinterSession || false,
    });
  }

  async findByUserAndSession(data: FindBySessionDTO) {
    const { student_id, isWinterSession, year } = data;
    const user = await this.userService.find(student_id);

    return await this.performanceRepository.find({
      where: {
        student_id: user[0],
        isWinterSession: isWinterSession === 'true',
        year,
      },
      relations: ['subject_id', 'student_id'],
    });
  }
}
