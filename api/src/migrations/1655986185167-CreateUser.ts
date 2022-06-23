import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1655986185167 implements MigrationInterface {
    name = 'CreateUser1655986185167'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`username\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` (\`username\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`post\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL COMMENT 'タイトル', \`content\` varchar(255) NOT NULL COMMENT '本文', \`status\` varchar(255) NOT NULL COMMENT 'ステータス', \`thumbnailUrl\` varchar(255) NOT NULL COMMENT 'サムネイルURL', \`createdAt\` varchar(255) NOT NULL COMMENT '作成日', \`updatedAt\` varchar(255) NOT NULL COMMENT '更新日', \`publishedAt\` varchar(255) NOT NULL COMMENT '公開日', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`post\``);
        await queryRunner.query(`DROP INDEX \`IDX_78a916df40e02a9deb1c4b75ed\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
