import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import AppDataSource from "../../database/dataSource"
import { User } from "../../entities/User"
import config from "../../config/config"

export const loginController = async (req: Request, res: Response) => {
  // check if username and password are set
  let { username, password } = req.body

  if (!username && password) {
    res.status(400).send()
  }

  // get user from database
  const userRepository = AppDataSource.manager.getRepository(User)
  let user: User

  try {
    user = await userRepository.findOneOrFail({ where: { username } })
  } catch (error) {
    res.status(401).send()
    return
  }

  // check if encrypted password match
  let bool: boolean = <boolean>user.checkIfUnencruptedPasswordIsValid(password)
  if (!bool) {
    res.status(401).send()
    return
  }

  // sign jwt, valid for 1 hour
  const token = jwt.sign(
    { userId: user.id, username: user.username },
    config.jwtSecret,
    { expiresIn: "1h" }
  )

  // send the jwt in the response
  res.send(token)
}
