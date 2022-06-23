import { DataSourceOptions } from 'typeorm';
import { User, Post } from '../entities';

export const ormconfig: DataSourceOptions = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'blog',
  entities: [User, Post],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
};
