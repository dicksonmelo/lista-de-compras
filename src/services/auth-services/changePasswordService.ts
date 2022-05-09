import { Request, Response } from "express"
import AppDataSource from "../../database/dataSource"
import { validate } from "class-validator"
import { User } from "../../entities/User"

type ChangePassword = {
  id: string
  oldPassword: string
  newPassword: string
}
export const changePasswordService = async ({
  id,
  oldPassword,
  newPassword,
}: ChangePassword): Promise<Error | any> => {
  if (!(oldPassword && newPassword)) {
    return new Error("You have to provide the right information")
  }

  const userRepository = AppDataSource.manager.getRepository(User)

  const user = await userRepository.findOne({ where: { id } })
  if (!user) return new Error(`${user} doesn't exist.`)

  user.password = newPassword
  user.hashPassword()
  userRepository.save(user)

  return user
}
