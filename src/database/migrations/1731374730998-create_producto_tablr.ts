import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProductoTablr1731374730998 implements MigrationInterface {
    name = 'CreateProductoTablr1731374730998'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "productos" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "precio" integer NOT NULL, "stock" integer NOT NULL, "image" character varying NOT NULL, "descripcion" character varying NOT NULL, "estado" boolean NOT NULL, "catgoriaId" integer, CONSTRAINT "PK_04f604609a0949a7f3b43400766" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "productos" ADD CONSTRAINT "FK_be7687c5b5518262ddc8ec26291" FOREIGN KEY ("catgoriaId") REFERENCES "categoria"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "productos" DROP CONSTRAINT "FK_be7687c5b5518262ddc8ec26291"`);
        await queryRunner.query(`DROP TABLE "productos"`);
    }

}
