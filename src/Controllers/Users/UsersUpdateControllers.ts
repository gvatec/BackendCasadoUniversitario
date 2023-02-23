import { Request, Response } from "express";
import { UsersUadateService } from "../../Services/Users/UsersUpdateService";

class UsersUpdateControllers {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email, datanacimento, telefone, rg, cpf, nomemae, urlfoto,cep } = req.body;

    const userupdate = new UsersUadateService();

    if(!req.file){
      throw new Error("error upload file")
    }else{

      const {filename} = req.file
      console.log(filename);
  
      const update = await userupdate.execute({
        id,
        name,
        email,
        datanacimento,
        telefone,
        rg,
        cpf,
        nomemae,
        urlfoto:String(filename),
        cep
      });
  
      return res.json(update);
    }

    }
}

export { UsersUpdateControllers };
