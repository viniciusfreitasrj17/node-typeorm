import { Router } from 'express';
import ClassController from './controllers/ClassController';

const routes = Router();

routes.get('/class', ClassController.index);
routes.get('/class/:name', ClassController.show);
routes.post('/class', ClassController.store);

export default routes;
