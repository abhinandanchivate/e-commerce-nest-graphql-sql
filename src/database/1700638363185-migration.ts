import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1700638363185 implements MigrationInterface {
    name = 'Migration1700638363185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Product" ("ID" SERIAL NOT NULL, "CreatedDate" TIMESTAMP NOT NULL DEFAULT now(), "UpdatedDate" TIMESTAMP NOT NULL DEFAULT now(), "Price" double precision NOT NULL, "IN_Stock" boolean NOT NULL, "UserID" integer NOT NULL, CONSTRAINT "PK_5c22f7d26ece7d5803215e58c1e" PRIMARY KEY ("ID")); COMMENT ON COLUMN "Product"."Price" IS 'Price of the product per unit'; COMMENT ON COLUMN "Product"."IN_Stock" IS 'To specify weather the product is in stock or not'; COMMENT ON COLUMN "Product"."UserID" IS 'relation with user table as User.ID'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Product"`);
    }

}
