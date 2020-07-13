import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Student from '../models/Student';

class StudentController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Student);
      const data = await repo.find();

      return res.status(200).json(data);
    } catch (err) {
      // console.log(err.message);
      return res.status(400).json({ Mensagge: 'Index Student Failed' });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Student);
      const data = await repo.save(req.body);

      return res.status(200).json(data);
    } catch (err) {
      // console.log(err.message);
      return res.status(400).json({ Mensagge: 'Store Student Failed' });
    }
  }
}

export default new StudentController();
