import { Router, Response, Request } from 'express';
// import classRouter from './class.routes';

const routes = Router();

routes.use(
  '/',
  async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({ Message: 'Run ... 🕶' });
  }
);

export default routes;
