import { MigrationInterface, QueryRunner } from "typeorm";

export class updateCityAddress1677785038077 implements MigrationInterface {
    name = 'updateCityAddress1677785038077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "city" character varying(20) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "city" character varying(6) NOT NULL`);
    }

}
