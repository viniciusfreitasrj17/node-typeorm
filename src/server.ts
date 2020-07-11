import 'reflect-metadata';
import app from './app';
import './database';

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('🏃 Running Server ✨');
});
