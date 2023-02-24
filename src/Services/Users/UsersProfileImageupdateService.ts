import prismaclient from "../../Prisma/Prismacliente";

interface foto {
  id: string;
  urlfoto: string;
}

class UsersProfileImageupdateService {
  async execute({ urlfoto, id }: foto) {
    const updatefoto = await prismaclient.users.update({
      where: {
        id: id,
      },
      data: {
        urlfoto: urlfoto,
      },
    });
    return updatefoto
  }
}

export {UsersProfileImageupdateService}