import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateIdentifier1594688301875 implements MigrationInterface {
    name = 'CreateIdentifier1594688301875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "college" ("graduations" character varying NOT NULL, "year" integer NOT NULL, "identificationId" uuid NOT NULL DEFAULT uuid_generate_v4(), "identificationName" character varying NOT NULL, "identificationCnpj" character varying NOT NULL, "identificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "identificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ea02cccb5b3a75968ef94483fcf" PRIMARY KEY ("identificationId"))`);
        await queryRunner.query(`CREATE TABLE "university" ("graduations" character varying NOT NULL, "doctors" character varying NOT NULL, "masters" character varying NOT NULL, "indentificationId" uuid NOT NULL DEFAULT uuid_generate_v4(), "indentificationName" character varying NOT NULL, "indentificationCnpj" character varying NOT NULL, "indentificationCreated_at" TIMESTAMP NOT NULL DEFAULT now(), "indentificationUpdated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ed6accd57e30f3d22963830c705" PRIMARY KEY ("indentificationId"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "university"`);
        await queryRunner.query(`DROP TABLE "college"`);
    }

}
