/* eslint-disable import/prefer-default-export */
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { Content } from './Content';
import { Class } from './Class';

@Entity('lesson', { schema: 'public' })
export class Lesson {
  @Column('uuid', {
    primary: true,
    name: 'id',
    default: () => 'uuid_generate_v4()'
  })
  id: string;

  @Column('character varying', { name: 'description' })
  description: string;

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

  @OneToOne(() => Content, content => content.lesson)
  content: Content;

  @ManyToOne(() => Class, classe => classe.lessons)
  @JoinColumn([{ name: 'classeId', referencedColumnName: 'id' }])
  classe: Class;
}
