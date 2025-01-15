import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { SubjectModule } from '../subject/subject.module';
import { PerformanceModule } from '../performance/performance.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dbConfig = require('../../../ormconfig');

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UserModule,
    SubjectModule,
    PerformanceModule,
  ],
})
export class AppModule {}
