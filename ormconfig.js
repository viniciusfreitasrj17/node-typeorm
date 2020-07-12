console.log(process.env.DATABASE_URL);
module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // host: '',
  // port: 5433,
  // username: '',
  // password: '',
  // database: '',
  // synchronize: true,
  entities: ['dist/models/**/*.js'],
  migrations: ['dist/database/migrations/**/*.js'],
  cli: {
    migrationsDir: ['src/database/migrations/'],
    entitiesDir: 'src/models'
  }
};
