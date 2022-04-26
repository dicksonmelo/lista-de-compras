import { Request, Response } from "express"
import AppDataSource from "../../database/dataSource"
import { validate } from "class-validator"
import { User } from "../../entities/User"

export const changePassword = async (req: Request, res: Response) => {
  // get id from jwt
  const id = res.locals.jwtPayload.userId

  //get parameters from the body
  const { oldPassword, newPassword } = req.body
  if (!(oldPassword && newPassword)) {
    res.status(400).send()
  }

  // get user from the database
  const userRepository = AppDataSource.manager.getRepository(User)
  let user: User

  try {
    user = await userRepository.findOneOrFail(id)
  } catch (error) {
    res.status(401).send()
    return
  }

  // check if old password matchs
  let bool: boolean = <boolean>(
    user.checkIfUnencruptedPasswordIsValid(oldPassword)
  )
  if (!bool) {
    res.status(401).send()
    return
  }

  // validate model (password length)
  user.password = newPassword
  const errors = await validate(user)
  if (errors.length > 0) {
    res.status(400).send(errors)
    return
  }

  user.hashPassword()
  userRepository.save(user)

  res.status(204).send()
}
