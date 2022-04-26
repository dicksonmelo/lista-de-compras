import { User } from "entities/User"
import AppDataSource from "database/dataSource"

type UserUpdateType = {
  id: string
  username?: string
}

const updateUserService = async ({
  id,
  username,
}: UserUpdateType): Promise<User | Error> => {
  const {
    manager: { getRepository },
  } = AppDataSource
  const repo = getRepository(User)

  const user = await repo.findOne({ where: { id } })
  if (!user) return new Error("User doesn't exist")

  user.username = username
  user.updated_at = new Date()

  repo.save(user)

  return user
}

export default updateUserService
