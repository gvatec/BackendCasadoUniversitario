import { UsersListAllServices } from "../../Services/Users/UsersListAllServices";
import { Request,Response } from "express";

class UsersListAllControllers{
    async handle(req:Request,res:Response){
        const Userslist = new UsersListAllServices();
        const userlist = await Userslist.execute({})

        return res.json(userlist)
    }
}

export {UsersListAllControllers}