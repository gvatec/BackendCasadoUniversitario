import { UserCreateService } from "../../Services/Users/UsersCreateService";
import { Request, Response } from "express";

class UsersCreateControllers {
  async handle(req: Request, res: Response) {
    const { name, email, password, telefone, datanascimento } = req.body;

    const usercreate = new UserCreateService();
    const create = await usercreate.execute({
      name,
      email,
      password,
      telefone,
      datanascimento,
    });

    return res.json(create);
  }
}
export { UsersCreateControllers };
