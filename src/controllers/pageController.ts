import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'https://images2.imgbox.com/7f/4e/6hmfTJCV_o.jpg'
    }
  });
};

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'https://images2.imgbox.com/bd/47/v9AteLwY_o.jpg'
    }
  });
};

export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'https://images2.imgbox.com/f7/85/kZuLSwVw_o.jpg'
    }
  });
};

export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'https://images2.imgbox.com/82/6f/ZK6O5aQG_o.jpg'
    }
  });
};