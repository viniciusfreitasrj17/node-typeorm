/* eslint-disable no-console */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { validate } from 'class-validator';
import Student from '../models/Student';

class StudentController {
  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Student);
      const data = await repo.find();

      return res.status(200).json(data);
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({ Mensagge: 'Index Student Failed' });
    }
  }

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const repo = getRepository(Student);
      const { name, key, email } = req.body;

      const student = new Student();
      student.name = name;
      student.key = key;
      student.email = email;

      const erros = await validate(student);

      if (erros.length === 0) {
        const data = await repo.save(student);
        return res.status(200).json(data);
      }
      return res.status(400).json(erros.map(content => content.constraints));
    } catch (err) {
      console.log(err.message);
      return res.status(400).json({ Mensagge: 'Store Student Failed' });
    }
  }
}

export default new StudentController();
