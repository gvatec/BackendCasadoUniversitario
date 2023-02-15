import prismaclient from "../../Prisma/Prismacliente";

class UsersListAllServices{
    async execute({}){
        const Listusers = await prismaclient.users.findMany({})

        return {Listusers}
    }
}
export {UsersListAllServices}