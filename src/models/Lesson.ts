import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  idAula: string;

  @Column({
    length: 250
  })
  name: string;
}
