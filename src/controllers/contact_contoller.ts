import { Request, Response } from 'express';
// viet xong thi xe import work o modal
import Contact from '../models/contact';
class ContactController {
  async index(req: Request, res: Response) {
    const contacts = await Contact.find();
    console.log(contacts);
    res.render('contact', {
      title: 'My Contact',
      Name: contacts[0].nameCT,
    });
  }
}

export default new ContactController();
