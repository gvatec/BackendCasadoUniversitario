import prismaclient from "../../Prisma/Prismacliente";

interface UsersUpdateServiceCredencials {
  id: string;
  name: string;
  email: string;
  datanascimento: string;
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
    datanascimento,
    telefone,
    rg,
    cpf,
    nomemae,
    cep
  }: UsersUpdateServiceCredencials) {
    const updateuser = await prismaclient.users.update({
      where: {
       id:id
      },
      data: {
        name: name,
        email: email,
        datanascimento: datanascimento,
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
