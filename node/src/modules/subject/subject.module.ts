import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectEntity } from './entities/subject.entitie';
import { SubjectService } from './services/subject.service';
import { SubjectController } from './controllers/subject.contoller';

@Module({
  imports: [TypeOrmModule.forFeature([SubjectEntity])],
  providers: [SubjectService],
  controllers: [SubjectController],
  exports: [SubjectService],
})
export class SubjectModule {}
