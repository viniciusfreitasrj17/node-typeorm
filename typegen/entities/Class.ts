/* eslint-disable import/prefer-default-export */
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { Lesson } from './Lesson';
import { Student } from './Student';

@Entity('class', { schema: 'public' })
export class Class {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()'
  })
  id: string;

  @Column('character varying', { name: 'name' })
  name: string;

  @Column('integer', { name: 'duration' })
  duration: number;

  @Column('timestamp without time zone', {
    name: 'created_At',
    default: () => 'now()'
  })
  createdAt: Date;

  @Column('timestamp without time zone', {
    name: 'updated_At',
    default: () => 'now()'
  })
  updatedAt: Date;

  @OneToMany(() => Lesson, lesson => lesson.classe)
  lessons: Lesson[];

  @ManyToMany(() => Student, student => student.classes)
  @JoinTable({
    name: 'student_classes_class',
    joinColumns: [{ name: 'classId', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'studentId', referencedColumnName: 'id' }],
    schema: 'public'
  })
  students: Student[];
}
