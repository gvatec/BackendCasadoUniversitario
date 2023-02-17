import prismaclient from "../../Prisma/Prismacliente";

interface Usercredencialslogout{
    id: string
}
class UsersSessionLogoutService{
    async execute({id}:Usercredencialslogout){
        
        const logout = await prismaclient.session.delete({
            where:{
                iduser:id
            }
        })
        return logout
    }
}

export {UsersSessionLogoutService}