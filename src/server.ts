import 'reflect-metadata';
import app from './app';
import './database';

app.listen(3333, () => {
  console.log('🏃 Running Server ✨');
});
