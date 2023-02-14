import prismaclient from "../../Prisma/Prismacliente";

interface Usercredencials {
  email: string;
  name: string;
  datanascimento: Date;
  telefone: number;
  password: string;
}

class UserCreateService {
  async execute({
    name,
    email,
    telefone,
    datanascimento,
    password,
  }: Usercredencials) {
    const usercreate = await prismaclient.users.create({
      data: {
        name: name,
        email: email,
        telefone: telefone,
        datanascimento: datanascimento,
        password: password,
      },
      select: {
        id: true,
        email: true,
        name: true,
        telefone: true,
      },
    });
    return usercreate;
  }
}

export { UserCreateService };
