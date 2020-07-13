import { Router } from 'express';
import ClassController from './controllers/ClassController';
import ContentController from './controllers/ContentController';
import LessonController from './controllers/LessonController';
import StudentController from './controllers/StudentController';

const routes = Router();

// routes Class
routes.get('/class', ClassController.index);
routes.get('/class/:name', ClassController.show);
routes.post('/class', ClassController.store);

// routes Content
routes.get('/content', ContentController.index);
routes.post('/content', ContentController.store);

// routes Lesson
routes.get('/lesson', LessonController.index);
routes.post('/lesson', LessonController.store);

// routes Student
routes.get('/student', StudentController.index);
routes.post('/student', StudentController.store);

export default routes;
