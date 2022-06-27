import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnToUser1656338213392 implements MigrationInterface {
    name = 'AddColumnToUser1656338213392'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`name\` varchar(255) NOT NULL COMMENT '可変の表示名'`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`bio\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`avatarUrl\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`twitterUsername\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`instagramUsername\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`websiteUrl\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`gaTrackingId\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`gaTrackingId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`websiteUrl\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`instagramUsername\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`twitterUsername\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`avatarUrl\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`bio\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`name\``);
    }

}
