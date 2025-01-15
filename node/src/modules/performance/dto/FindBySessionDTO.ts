import { PerformanceEntity } from '../entities/performance.entitie';
import { UserEntity } from '../../user/entities/user.entitie';

export class FindBySessionDTO {
  year: PerformanceEntity['year'];
  isWinterSession: string;
  student_id: UserEntity['id'];
}
