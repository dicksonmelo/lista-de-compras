import AppDataSource from "../../database/dataSource"
import { User } from "../../entities/User"

export const createNewUserService = async ({
  username,
  password,
  role,
}): Promise<User | Error> => {
  const { manager } = AppDataSource

  const repo = manager.getRepository(User)

  if (await repo.findOne({ where: { username } })) {
    return new Error("Username already in use")
  }

  const user = repo.create({
    username,
    password,
    role,
  })
  user.hashPassword()

  try {
    await repo.save(user)
    return user
  } catch (e) {
    return new Error(e)
  }
}
