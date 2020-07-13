import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateStudent1594666323626 implements MigrationInterface {
  name = 'CreateStudent1594666323626';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lesson" RENAME COLUMN "idAula" TO "id"`
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" RENAME CONSTRAINT "PK_aedb92377a845335bc4d9f30d22" TO "PK_0ef25918f0237e68696dee455bd"`
    );
    await queryRunner.query(
      `CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "key" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "student"`);
    await queryRunner.query(
      `ALTER TABLE "lesson" RENAME CONSTRAINT "PK_0ef25918f0237e68696dee455bd" TO "PK_aedb92377a845335bc4d9f30d22"`
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" RENAME COLUMN "id" TO "idAula"`
    );
  }
}
