import { Router } from "express";
import { UsersCreateControllers } from "./Controllers/Users/UsersCreateControllers";
import { UsersListAllControllers } from "./Controllers/Users/UsersListAllControllers";

const route = Router()

route.post('/users',new UsersCreateControllers().handle)
route.get('/users',new UsersListAllControllers().handle)



export default route;