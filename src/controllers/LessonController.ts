import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Lesson from '../models/Lesson';

class LessonController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Lesson);
      const data = await repo.find();

      return res.status(200).json(data);
    } catch (err) {
      // console.log(err.message);
      return res.status(400).json({ Mensagge: 'Index Lesson Failed' });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Lesson);
      const data = await repo.save(req.body);

      return res.status(200).json(data);
    } catch (err) {
      // console.log(err.message);
      return res.status(400).json({ Mensagge: 'Store Lesson Failed' });
    }
  }
}

export default new LessonController();
