import { PerformanceEntity } from '../entities/performance.entitie';
import { UserEntity } from '../../user/entities/user.entitie';
import { SubjectEntity } from '../../subject/entities/subject.entitie';

export class CreatePerformanceDTO {
  student_id: UserEntity['id'];
  subject_id: SubjectEntity['id'];
  year: PerformanceEntity['year'];
  isWinterSession: PerformanceEntity['isWinterSession'];
  mark: PerformanceEntity['mark'];
}
