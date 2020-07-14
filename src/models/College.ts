import { Column, ChildEntity } from 'typeorm';
import Institution from './Institution';

@ChildEntity()
export default class College extends Institution {
  @Column()
  graduations: string;

  @Column()
  year: number;
}
