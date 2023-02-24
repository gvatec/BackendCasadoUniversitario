import prismaclient from "../../Prisma/Prismacliente";

interface UsersUpdateServiceCredencials {
  id: string;
  name: string;
  email: string;
  datanacimento: string;
  telefone: string;
  rg: string;
  cpf: string;
  nomemae: string;
  cep:string;
}
class UsersUadateService {
  async execute({
    id,
    name,
    email,
    datanacimento,
    telefone,
    rg,
    cpf,
    nomemae,
    cep
  }: UsersUpdateServiceCredencials) {
    const updateuser = prismaclient.users.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        email: email,
        datanascimento: datanacimento,
        telefone: telefone,
        cpf: cpf,
        nomemae: nomemae,
        rg: rg,
        cep:cep
      },
    });
    return updateuser;
  }
}

export { UsersUadateService };
