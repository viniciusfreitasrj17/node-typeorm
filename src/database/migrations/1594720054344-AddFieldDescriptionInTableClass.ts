import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFieldDescriptionInTableClass1594720054344 implements MigrationInterface {
    name = 'AddFieldDescriptionInTableClass1594720054344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" ADD "description" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "class" ADD CONSTRAINT "UQ_e0beafa634db442ef3535c28bee" UNIQUE ("description")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" DROP CONSTRAINT "UQ_e0beafa634db442ef3535c28bee"`);
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "description"`);
    }

}
