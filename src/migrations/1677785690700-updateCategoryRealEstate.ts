import { MigrationInterface, QueryRunner } from "typeorm";

export class updateCategoryRealEstate1677785690700 implements MigrationInterface {
    name = 'updateCategoryRealEstate1677785690700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_3e02817b25e8f0c48f51c7ac571"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "categoriesId" TO "categoryId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_e64472d578faf91bee90a06ecc0" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" DROP CONSTRAINT "FK_e64472d578faf91bee90a06ecc0"`);
        await queryRunner.query(`ALTER TABLE "real_estate" RENAME COLUMN "categoryId" TO "categoriesId"`);
        await queryRunner.query(`ALTER TABLE "real_estate" ADD CONSTRAINT "FK_3e02817b25e8f0c48f51c7ac571" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
