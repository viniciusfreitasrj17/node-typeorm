module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // host: '',
  // port: 5433,
  // username: '',
  // password: '',
  // database: '',
  // synchronize: true,
  entities: [process.env.ENTITIES_PATH],
  migrations: [process.env.MIGRATIONS_PATH],
  cli: {
    migrationsDir: ['src/database/migrations'],
    entitiesDir: 'src/models'
  }
};
