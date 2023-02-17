import { UsersDeleteService } from "../../Services/Users/UsersDeleteService";
import { Request,Response } from "express";

class UserDeleteControllers{
    async handle(req:Request,res:Response){
        const {id} = req.params
        const userdelete = new UsersDeleteService();

        const deleteuser = await userdelete.execute({id})

        return res.json(deleteuser)
    }
}
export {UserDeleteControllers}