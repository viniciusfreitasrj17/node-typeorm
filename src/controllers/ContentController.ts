/* eslint-disable no-console */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Content from '../models/Content';

class ContentController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Content);
      const data = await repo.find();

      return res.status(200).json(data);
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({ Mensagge: 'Index Content Failed' });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Content);
      const data = await repo.save(req.body);

      return res.status(200).json(data);
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({ Mensagge: 'Store Content Failed' });
    }
  }
}

export default new ContentController();
