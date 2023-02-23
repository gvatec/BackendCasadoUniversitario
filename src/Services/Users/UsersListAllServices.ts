import prismaclient from "../../Prisma/Prismacliente";

class UsersListAllServices{
    async execute({}){
        const Listusers = await prismaclient.users.findMany({
            select:{
                name:true,
                email:true,
                telefone:true,
                datanascimento:true,
                urlfoto:true
            }
        })

        return {Listusers}
    }
}
export {UsersListAllServices}