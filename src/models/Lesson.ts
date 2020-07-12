import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  idAula: string;

  @Column({
    length: 250
  })
  name: string;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}
