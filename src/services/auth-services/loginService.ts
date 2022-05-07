import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import AppDataSource from "../../database/dataSource"
import { User } from "../../entities/User"
import config from "../../config/config"

type Login = {
  username: string
  password: string
}

export const loginService = async ({
  username,
  password,
}: Login): Promise<string | Error> => {
  if (!username && !password) {
    return new Error("You have to provide both valid username and password")
  }

  const userRepository = AppDataSource.manager.getRepository(User)
  console.log("chega aqui")
  const user = await userRepository.findOne({ where: { username } })
  if (!user) return new Error("User doesn't exist")

  const passwordIsValid: boolean = <boolean>(
    user.checkIfUnencruptedPasswordIsValid(password)
  )
  if (!passwordIsValid) return new Error("Senha inválida")

  const token = jwt.sign(
    { userId: user.id, username: user.username },
    config.jwtSecret,
    { expiresIn: "5h" }
  )

  return token
}
