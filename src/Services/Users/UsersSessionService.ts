import prismaclient from "../../Prisma/Prismacliente";

interface Userscredencialssession {
  email: string;
  password: string;
  urlfoto: string;
}

class UsersSessionService {
  async execute({ email, password, urlfoto }: Userscredencialssession) {
    const session = await prismaclient.users.findFirst({
      where: {
        email: email,
      },
    });

    if (!session) {
      throw new Error("Usuario não encontrado / dados incorretos");
    }

    if (password != session.password) {
      throw new Error("Senha incorreta");
    }

    const createsession = await prismaclient.session.create({
      data: {
        iduser: session.id,
        name: session.name,
        email: session.email,
        telefone: session.telefone,
        datanascimento: session.datanascimento,
        urlfoto: session.urlfoto,
        rg: session.rg,
        cpf: session.cpf,
      },
    });
    return createsession;
  }
}

export { UsersSessionService };
