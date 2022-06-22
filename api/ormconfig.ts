
const options = {
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'blog',
  entities: [__dirname + 'dist/entities/*.entity.js'],
  migrations: [__dirname + 'dist/migrations/*.js'],
  synchronize: false,
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
};

module.exports = options