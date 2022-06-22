import { DataSourceOptions } from 'typeorm';

export const ormconfig: DataSourceOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'blog',
  entities: [__dirname + '/**/*.entity.{js,ts}'], // migrate:showが動かないがpostが動く
  // entities: [__dirname + 'dist/entities/*.entity.{js,ts}'], // migrate:showが動くがpostが動かない
  migrations: [__dirname + 'dist/migrations/*.js'],
  synchronize: false,
};
