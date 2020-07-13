module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  // host: '',
  // port: 5433,
  // username: '',
  // password: '',
  // database: '',
  // synchronize: true,
  entities: [process.env.ENTITIES_PATH] || ['dist/models/**/*.js'],
  migrations: [process.env.MIGRATIONS_PATH] || [
    'dist/database/migrations/**/*.js'
  ],
  cli: {
    migrationsDir: ['src/database/migrations'],
    entitiesDir: 'src/models'
  }
};
