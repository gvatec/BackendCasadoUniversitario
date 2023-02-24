import { Router } from "express";
import { UsersCreateControllers } from "./Controllers/Users/UsersCreateControllers";
import { UsersListAllControllers } from "./Controllers/Users/UsersListAllControllers";
import { UsersUpdateControllers } from "./Controllers/Users/UsersUpdateControllers";
import { UserDeleteControllers } from "./Controllers/Users/UsersDeleteControllers";
import { UserSessionControllers } from "./Controllers/Users/UserSessionControllers";
import { UsersSessionLogoutControllers } from "./Controllers/Users/UsersSessionLogoutControllers";
import { UsersProfileImageupdateController } from "./Controllers/Users/UsersProfileImageupdateController";
import { isAuthenticated } from "./Middlewares/auth";
import multer from "multer";
import uploadConfig from "./Config/multer";

const route = Router();
const upload = multer(uploadConfig.upload("./tmp"));

//--------Rotas de usuarios-----------
route.post("/users", new UsersCreateControllers().handle);
route.get("/users", new UsersListAllControllers().handle);
route.put("/users/:id", upload.single("file"), new UsersUpdateControllers().handle);
route.put("/profile/:id", upload.single("file"), new UsersProfileImageupdateController().handle);
route.delete("/users/:id", new UserDeleteControllers().handle);

//Rota de Login/sessao do usuario
route.post("/session", new UserSessionControllers().handle);
route.delete("/session/:id", new UsersSessionLogoutControllers().handle);

export { route };
