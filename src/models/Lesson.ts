import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  ManyToOne
} from 'typeorm';
import Content from './Content';
import Class from './Class';

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @OneToOne(type => Content, lesson => Lesson)
  content: Content;

  @ManyToOne(type => Class, lessons => Lesson, { eager: true }) // apenas usar o eager em uma ponta
  classe: Class;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}
