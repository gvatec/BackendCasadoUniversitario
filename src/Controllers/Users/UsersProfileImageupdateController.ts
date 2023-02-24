import { Request, Response } from "express";
import { UsersProfileImageupdateService } from "../../Services/Users/UsersProfileImageupdateService";

class UsersProfileImageupdateController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { urlfoto } = req.body;
    const service = new UsersProfileImageupdateService();

    const update = await service.execute({ id, urlfoto });
    return res.json(update)
  }
}
export {UsersProfileImageupdateController}
