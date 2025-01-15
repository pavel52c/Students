import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PerformanceEntity } from '../../performance/entities/performance.entitie';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => PerformanceEntity, (performance) => performance.student_id)
  performances: PerformanceEntity[];
}
