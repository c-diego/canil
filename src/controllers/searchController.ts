import { Request, Response } from 'express';
import { PetUseCase } from '../models/petUseCase';
import { createMenuObject } from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) => {
  const query = req.query.query as string;
  const pets = PetUseCase.getFromName(query);

  res.render('pages/page', {
    menu: createMenuObject(''),
    pets,
    query
  });
};