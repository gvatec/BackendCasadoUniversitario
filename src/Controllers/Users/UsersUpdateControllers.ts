import { Request, Response } from "express";
import { UsersUadateService } from "../../Services/Users/UsersUpdateService";

class UsersUpdateControllers {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, datanascimento, telefone, rg, cpf, nomemae, cep } = req.body;

    const userupdate = new UsersUadateService();

    const update = await userupdate.execute({
      id,
      name,
      email,
      datanascimento,
      telefone,
      rg,
      cpf,
      nomemae,
      cep,
    });

    return res.json(update);
  }
}

export { UsersUpdateControllers };
