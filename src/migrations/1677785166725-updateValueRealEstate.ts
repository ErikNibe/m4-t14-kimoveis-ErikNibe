import { MigrationInterface, QueryRunner } from "typeorm";

export class updateValueRealEstate1677785166725 implements MigrationInterface {
    name = 'updateValueRealEstate1677785166725'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" TYPE numeric(12,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" TYPE numeric(12,12)`);
    }

}
