import { UsersSessionService } from "../../Services/Users/UsersSessionService";
import { Request, Response } from "express";

class UserSessionControllers {
    async handle(req: Request, res: Response) {

        const session = new UsersSessionService();
        const { email, password } = req.body

        const createsession = await session.execute({
           
            email,
            password
        })
        return res.json(createsession)
    }
}

export { UserSessionControllers }