import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entitie';
import { SubjectEntity } from '../../subject/entities/subject.entitie';

@Entity()
export class PerformanceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mark: number;

  @Column()
  year: string;

  @Column()
  isWinterSession: boolean;

  @ManyToOne(() => SubjectEntity, (subject) => subject.performances)
  subject_id: SubjectEntity;

  @ManyToOne(() => UserEntity)
  student_id: UserEntity;
}
