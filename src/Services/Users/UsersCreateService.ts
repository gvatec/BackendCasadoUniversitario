import  express  from "express";
import prismaclient from "../../Prisma/Prismacliente";

interface Usercredencials {
  email: string;
  name: string;
  password: string;
  datanascimento: string;
  telefone: string;
}

class UserCreateService {
  async execute({
    name,
    email,
    telefone,
    datanascimento,
    password,
  }: Usercredencials) {

    const userExists = await prismaclient.users.findFirst({
      where: {
        email: email
      }
    })
    if(userExists){
      throw new Error("User already exists")
    }



    

      const usercreate = await prismaclient.users.create({
        data: {
          name: name,
          email: email,
          password: password,
          datanascimento: datanascimento,
          telefone: telefone,
        },
        select: {
          id: true,
          email: true,
          name: true,
          telefone: true,
          datanascimento:true
        },
      });
      return usercreate;
    }

    
}

export { UserCreateService };
