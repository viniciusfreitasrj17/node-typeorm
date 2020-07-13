import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddFieldEmailInTableStudent1594679911581
  implements MigrationInterface {
  name = 'AddFieldEmailInTableStudent1594679911581';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" ADD "email" character varying NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
  }
}
