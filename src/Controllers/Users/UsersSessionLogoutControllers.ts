import { UsersSessionLogoutService } from "../../Services/Users/UsersSessionLogoutService";
import { Request,Response } from "express";



class UsersSessionLogoutControllers{
    async handle(req:Request,res:Response){
       const {id} = req.params

       const logoutsession = new UsersSessionLogoutService();

       const logout =  await logoutsession.execute({id})

       res.json(logout)
    }
}

export {UsersSessionLogoutControllers}