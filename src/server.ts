import 'reflect-metadata';
import app from './app';
import './database';

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

app.listen(process.env.PORT || 3333, () => {
  console.log('🏃 Running Server ✨');
});
