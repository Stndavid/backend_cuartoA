import { MigrationInterface, QueryRunner } from "typeorm";

export class ModificandoTableUser1731291989036 implements MigrationInterface {
    name = 'ModificandoTableUser1731291989036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "contacto" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "contacto"`);
    }

}
