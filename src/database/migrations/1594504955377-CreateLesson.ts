import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateLesson1594504955377 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'lesson',
        columns: [
          {
            name: 'idAula',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'description',
            type: 'varchar'
          },
          {
            name: 'created_At',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_At',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('lesson');
  }
}
