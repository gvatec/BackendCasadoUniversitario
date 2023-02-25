import prismaclient from "../../Prisma/Prismacliente";
import { compare } from "bcrypt";

interface Userscredencialssession {
  email: string;
  password: string;
  urlfoto: string;
}

class UsersSessionService {
  async execute({email, password, urlfoto }: Userscredencialssession) {
    const userExists = await prismaclient.users.findFirst({
      where: {
        email: email,
      },
    });

    if (!userExists) {
      throw new Error("Usuario não encontrado / dados incorretos");
    }

    const passCompare = await compare(password, userExists.password);
    if (!passCompare) {
      throw new Error("Senha incorreta!");
    }

    const createsession = await prismaclient.session.create({
      data: {
        iduser: userExists.id,
        name: userExists.name,
        email: userExists.email,
        telefone: userExists.telefone,
        datanascimento: userExists.datanascimento,
        urlfoto: userExists.urlfoto,
        rg: userExists.rg,
        cpf: userExists.cpf,
        nomemae: userExists.nomemae,
      },
      select: {
        id:true,
        iduser: true,
        email: true,
        name: true,
        telefone: true,
        datanascimento: true,
        urlfoto: true,
        rg: true,
        cpf: true,
      },
    });
    return createsession;
  }
}

export { UsersSessionService };
