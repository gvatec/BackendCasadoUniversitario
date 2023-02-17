import prismaclient from "../../Prisma/Prismacliente";


interface UsersUpdateServiceCredencials{
    id: string
    name:string
    email:string
    datanacimento:string,
    telefone:string
}

class UsersUadateService{
    async execute({id,name,email,datanacimento,telefone} : UsersUpdateServiceCredencials){
        const updateuser = prismaclient.users.update({
            where:{
             id:id
            },
            data:{
             name:name,
             email:email,
             datanascimento:datanacimento,
             telefone:telefone
            }
        })
        return updateuser;
    }
}

export {UsersUadateService}