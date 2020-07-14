import { Column, Entity } from 'typeorm';
import Identifier from './Identifier';

@Entity()
export default class University {
  @Column(type => Identifier)
  indentification: Identifier;

  @Column()
  graduations: string;

  @Column()
  doctors: string;

  @Column()
  masters: string;
}
