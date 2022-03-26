import dotenv from 'dotenv';
import 'reflect-metadata';
import app from './app';
import './database';

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.dev'
});

app.listen(process.env.PORT || 3333, () => {
  // eslint-disable-next-line no-console
  console.log('🏃 Running Server ✨');
});
