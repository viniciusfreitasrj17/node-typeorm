import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { IsEmail, Max, Min, MaxLength, MinLength } from 'class-validator';
import Class from './Class';

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @MaxLength(50, { message: 'O nome  deve possuir no máximo 50 caracteres' })
  @MinLength(2, { message: 'O nome deve possui no mínimo 2 caracteres' })
  name: string;

  @Column()
  @Max(99999)
  @Min(10000)
  key: number;

  @Column()
  @IsEmail()
  email: string;

  @ManyToMany(type => Class)
  @JoinTable() // with this decorator not need add in Class
  classes: Class;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}
