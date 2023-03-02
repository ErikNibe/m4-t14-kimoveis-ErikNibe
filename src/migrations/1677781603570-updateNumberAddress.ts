import { MigrationInterface, QueryRunner } from "typeorm";

export class updateNumberAddress1677781603570 implements MigrationInterface {
    name = 'updateNumberAddress1677781603570'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
    }

}
