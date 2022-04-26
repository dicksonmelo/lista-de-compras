import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import AppDataSource from "@database/dataSource"
import { User } from "@entities/User"
import config from "@src/config/config"

export const loginController = async (req: Request, res: Response) => {
  // check if email and password are set
  let { email, password } = req.body

  if (!email && password) {
    res.status(400).send()
  }

  // get user from database
  const userRepository = AppDataSource.manager.getRepository(User)
  let user: User

  try {
    user = await userRepository.findOneOrFail({ where: { email } })
  } catch (error) {
    res.status(401).send()
  }

  // check if encrypted password match
  if (!user.checkIfUnencruptedPasswordIsValid(password)) {
    res.status(401).send()
    return
  }

  // sign jwt, valid for 1 hour
  const token = jwt.sign(
    { userId: user.id, email: user.email },
    config.jwtSecret,
    { expiresIn: "1h" }
  )

  // send the jwt in the response
  res.send(token)
}
