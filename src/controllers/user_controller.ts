import { Request, Response } from "express";
import User from "../models/user";

class UserController {
  async index(req: Request, res: Response) {
    const users = await User.find();
    console.log(users);
    res.render("index", {
      name: users[0].name,
      email: users[0].email,
    });
  }
}
export default new UserController();
