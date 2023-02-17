import { UsersUadateService } from "../../Services/Users/UsersUpdateService";
import { Request,Response } from "express";

class UsersUpdateControllers{
    async handle(req:Request,res:Response){
        const {id} = req.params
        const {name,email,datanacimento,telefone} = req.body

        const userupdate = new UsersUadateService();

        const update = await userupdate.execute({
        id,
        name,
        email,
        datanacimento,
        telefone
        })

        return res.json(update)
    }
}

export {UsersUpdateControllers}