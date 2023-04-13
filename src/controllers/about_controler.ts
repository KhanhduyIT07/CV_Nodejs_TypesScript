import { Request, Response } from 'express';
import About from '../models/about';

class AboutController {
  async index(req: Request, res: Response) {
    const abouts = await About.find();
    // console.log(abouts);
    res.render('about', {
      title: 'My About',
      job: abouts[0].job,
      address: abouts[0].address,
      addressNow: abouts[0].addressNow,
      phone: abouts[0].phone, // cái ni là phần tử đầu tiên trong mảng
    });
  }
  async sayHello(req: Request, res: Response) {
    res.send('Hello world');
  }
}

export default new AboutController();
