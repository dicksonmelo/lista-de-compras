import { User } from "../../entities/User"
import AppDataSource from "../../database/dataSource"

const listAllUsersService = async (): Promise<User[] | Error> => {
  const userRepository = AppDataSource.manager.getRepository(User)
  const users = await userRepository.find({
    select: ["id", "username", "role"],
  })

  if (!users) return new Error("Something went wrong")

  return users
}

export default listAllUsersService
