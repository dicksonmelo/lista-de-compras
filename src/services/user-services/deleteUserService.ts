import AppDataSource from "../../database/dataSource"
import { User } from "../../entities/User"

type DeleteUserType = {
  id: string
}

const deleteUserService = async ({
  id,
}: DeleteUserType): Promise<any | Error> => {
  const {
    manager: { getRepository },
  } = AppDataSource

  const repo = getRepository(User)

  const user = repo.findOne({ where: { id } })
  if (!user) {
    return new Error("User doesn't exist")
  }

  repo.delete(id)
}

export default deleteUserService
