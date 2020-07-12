import { Response, Request } from 'express';
import { getRepository } from 'typeorm';
import Class from '../models/Class';

class ClassController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Class);
      const data = await repo.find();

      return res.status(200).json(data);
    } catch (err) {
      // console.log(err.message);
      return res.status(400).json({ Mensagge: 'Index Class Failed' });
    }
  }

  public async show(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;
    try {
      const repo = getRepository(Class);
      const data = await repo.find({
        where: {
          name
        }
      });

      return res.status(200).json(data);
    } catch (err) {
      // console.log(err.message);
      return res.status(400).json({ Mensagge: 'Show Class Failed' });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Class);
      const data = await repo.save(req.body);

      return res.status(200).json(data);
    } catch (err) {
      // console.log(err.message);
      return res.status(400).json({ Mensagge: 'Store Class Failed' });
    }
  }
}

export default new ClassController();
