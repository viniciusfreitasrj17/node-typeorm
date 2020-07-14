import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  TableInheritance
} from 'typeorm';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export default abstract class Institution {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @CreateDateColumn()
  created_At: Date;

  @UpdateDateColumn()
  updated_At: Date;
}
