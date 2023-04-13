import { Request, Response } from 'express';
import Skill from '../models/skill';

class SkillController {
  async index(req: Request, res: Response) {
    const skills = await Skill.find();
    // console.log(skills);
    res.render('skill', {
      title: 'My Skill',
      html: skills[0],
      css: skills[1], // cái ni là phần tử đầu tiên trong mảng
      javascript: skills[2], // cái ni là phần tử đầu tiên trong mảng
      uxui: skills[3], // cái ni là phần tử đầu tiên trong mảng
    });
  }
}

export default new SkillController();
