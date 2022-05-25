import jwt from "jsonwebtoken"
import config from "../../config/config"
import AppDataSource from "../../database/dataSource"
import { User } from "../../entities/User"

type Login = {
  username: string
  password: string
}

export const loginService = async ({
  username,
  password,
}: Login): Promise<any | Error> => {
  if (!username && !password) {
    return new Error("You have to provide both valid username and password")
  }

  const userRepository = AppDataSource.manager.getRepository(User)

  const user = await userRepository.findOne({ where: { username } })
  if (!user) return new Error("User doesn't exist")

  const passwordIsValid: boolean = <boolean>(
    user.checkIfUnencryptedPasswordIsValid(password)
  )
  if (!passwordIsValid) return new Error("Senha inválida")

  const token = jwt.sign(
    { userId: user.id, username: user.username },
    config.jwtSecret,
    { expiresIn: "5h" }
  )

  return token
}
