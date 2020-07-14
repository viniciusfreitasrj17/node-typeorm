import { Entity, Column } from 'typeorm';
import Institution from './Institution';

@Entity('college')
export default class College extends Institution {
  @Column()
  graduations: string;
}
