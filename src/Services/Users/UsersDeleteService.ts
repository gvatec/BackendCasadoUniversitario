import prismaclient from "../../Prisma/Prismacliente";

interface IduserCredencials{
id: string
}
class UsersDeleteService{
    async execute({id} : IduserCredencials){
 
        const Deleteusser = await prismaclient.users.delete({
            where:{
                id:id
            }
        })
        return Deleteusser
    }
}

export {UsersDeleteService}