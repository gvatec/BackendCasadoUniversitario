import prismaclient from "../../Prisma/Prismacliente";
import { hash } from "bcrypt";

interface Usercredencials {
  email: string;
  name: string;
  password: string;
  datanascimento: string;
  telefone: string;
  rg: string;
  cpf: string;
  nomemae: string;
  urlfoto: string;
  cep: string;
}

class UserCreateService {
  async execute({
    name,
    email,
    telefone,
    datanascimento,
    password,
    rg,
    cpf,
    nomemae,
    urlfoto,
    cep,
  }: Usercredencials) {
    const userExists = await prismaclient.users.findFirst({
      where: {
        email: email,
      },
    });
    if (userExists) {
      throw new Error("User already exists");
    }

    const passcript = hash(password, 8);

    const usercreate = await prismaclient.users.create({
      data: {
        name: name,
        email: email,
        password: String(passcript),
        datanascimento: datanascimento,
        telefone: telefone,
        rg: rg,
        cpf: cpf,
        nomemae: nomemae,
        urlfoto: urlfoto,
        cep: cep,
      },
      select: {
        id: true,
        email: true,
        name: true,
        telefone: true,
        datanascimento: true,
        urlfoto: true,
        cep: true,
      },
    });
    return usercreate;
  }
}

export { UserCreateService };
