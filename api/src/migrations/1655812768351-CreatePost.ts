import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePost1655812768351 implements MigrationInterface {
  name = 'CreatePost1655812768351';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`post\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL COMMENT 'タイトル', \`content\` varchar(255) NOT NULL COMMENT '本文', \`status\` varchar(255) NOT NULL COMMENT 'ステータス', \`thumbnailUrl\` varchar(255) NOT NULL COMMENT 'サムネイルURL', \`createdAt\` varchar(255) NOT NULL COMMENT '作成日', \`updatedAt\` varchar(255) NOT NULL COMMENT '更新日', \`publishedAt\` varchar(255) NOT NULL COMMENT '公開日', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`post\``);
  }
}
