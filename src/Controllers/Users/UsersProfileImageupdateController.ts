import { Request, Response } from "express";
import { UsersProfileImageupdateService } from "../../Services/Users/UsersProfileImageupdateService";

class UsersProfileImageupdateController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { urlfoto } = req.body;
    const service = new UsersProfileImageupdateService();
    if (!req.file) {
      throw new Error("error upload file");
    } else {
      const { filename } = req.file;
      //console.log(filename);

      const update = await service.execute({
        id,
        urlfoto: String(filename),
      });

      return res.json(update);
    }
  }
}
export { UsersProfileImageupdateController };
