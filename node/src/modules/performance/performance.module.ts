import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerformanceService } from './services/performance.service';
import { PerformanceEntity } from './entities/performance.entitie';
import { PerformanceController } from './controllers/performance.controller';
import { SubjectModule } from '../subject/subject.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PerformanceEntity]),
    SubjectModule,
    UserModule,
  ],
  providers: [PerformanceService],
  controllers: [PerformanceController],
  exports: [PerformanceService],
})
export class PerformanceModule {}
