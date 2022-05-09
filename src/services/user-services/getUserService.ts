import { User } from "../../entities/User"
import AppDataSource from "../../database/dataSource"

type GetUserType = {
  id: string
}

const getUserService = async ({ id }: GetUserType): Promise<User | Error> => {
  const {
    manager: { getRepository },
  } = AppDataSource
  const repo = getRepository(User)

  const user = await repo.findOne({ where: { id } })
  if (!user) return new Error("User doesn't exist")

  return user
}

export default getUserService
