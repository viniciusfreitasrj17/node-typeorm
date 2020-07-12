import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

class ClassController {
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Class);
      const response = await repo.save(req.body);

      return res.status(200).json(response);
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({ Mensagge: 'Register Failed' });
    }
  }
}

export default new ClassController();
