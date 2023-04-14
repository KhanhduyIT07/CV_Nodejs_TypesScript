import { Request, Response } from 'express';
import Work from '../models/work';

class WorkController {
  async index(req: Request, res: Response) {
    const works = await Work.find();
    // tao modal co work co roi thi import do
    console.log(works);
    res.render('work', {
      // chus ys choox nay confib file ejs
      title: 'My Work',
      imgW: works[0],
      imgM: works[1],
      imgN: works[2],
      imgU: works[3],
      imgPP: works[4],
      //PP
      imgC: works[5],
    });
  }
}

export default new WorkController();
