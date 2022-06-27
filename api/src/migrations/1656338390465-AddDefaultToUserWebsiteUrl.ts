import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDefaultToUserWebsiteUrl1656338390465 implements MigrationInterface {
    name = 'AddDefaultToUserWebsiteUrl1656338390465'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`avatarUrl\` \`avatarUrl\` varchar(255) NOT NULL DEFAULT 'https://'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`avatarUrl\` \`avatarUrl\` varchar(255) NOT NULL`);
    }

}
