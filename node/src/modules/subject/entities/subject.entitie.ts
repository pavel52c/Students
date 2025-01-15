import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PerformanceEntity } from '../../performance/entities/performance.entitie';

@Entity()
export class SubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => PerformanceEntity, (performance) => performance.subject_id)
  performances: PerformanceEntity[];
}
