import { NextFunction, Request, Response } from "express";


export function isAuthenticated(req:Request,res:Response,next:NextFunction){
    const idsession = req.headers.authorization

    if(!idsession){
        return res.status(401).end();
    }
    try{
        return next();
    }catch(err){
        return res.status(401).end();
    }
}