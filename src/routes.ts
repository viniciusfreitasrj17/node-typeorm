import { Router } from 'express';
import ClassController from './controllers/ClassController';

const routes = Router();

routes.post('/class', ClassController.store);

export default routes;
