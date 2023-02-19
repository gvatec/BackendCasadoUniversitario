import { Router } from "express";
import { UsersCreateControllers } from "./Controllers/Users/UsersCreateControllers";
import { UsersListAllControllers } from "./Controllers/Users/UsersListAllControllers";
import { UsersUpdateControllers } from "./Controllers/Users/UsersUpdateControllers";
import { UserDeleteControllers } from "./Controllers/Users/UsersDeleteControllers";
import { UserSessionControllers } from "./Controllers/Users/UserSessionControllers";
import { UsersSessionLogoutControllers } from "./Controllers/Users/UsersSessionLogoutControllers";

const route = Router();

//--------Rotas de usuarios-----------
route.post("/users", new UsersCreateControllers().handle);
route.get("/users", new UsersListAllControllers().handle);
route.put("/users/:id", new UsersUpdateControllers().handle);
route.delete("/users/:id", new UserDeleteControllers().handle);

//Rota de Login/sessao do usuario
route.post("/session", new UserSessionControllers().handle);
route.delete("/session/:id", new UsersSessionLogoutControllers().handle);

export { route };
