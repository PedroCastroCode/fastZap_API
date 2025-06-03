import { MigrationInterface, QueryRunner } from "typeorm";

export class First1748952628517 implements MigrationInterface {
    name = 'First1748952628517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."transactions_type_enum" AS ENUM('0', '1', '2')`);
        await queryRunner.query(`CREATE TABLE "transactions" ("id" uuid NOT NULL, "type" "public"."transactions_type_enum" NOT NULL, "category" character varying(100) NOT NULL, "date" TIMESTAMP NOT NULL, "description" character varying(255) NOT NULL, CONSTRAINT "PK_a219afd8dd77ed80f5a862f1db9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "transactions"`);
        await queryRunner.query(`DROP TYPE "public"."transactions_type_enum"`);
    }

}
