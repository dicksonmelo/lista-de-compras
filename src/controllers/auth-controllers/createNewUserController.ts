import { validate } from "class-validator"
import { Request, Response } from "express"
import AppDataSource from "../../database/dataSource"
import { User } from "../../entities/User"

export const createNewUserController = async (req: Request, res: Response) => {
  // get parameters from the body
  let { username, password, role } = req.body

  let user = new User()

  user.username = username
  user.password = password
  user.role = role

  // validate if the parameters are ok
  const errors = await validate(user)
  if (errors.length > 0) {
    res.status(400).send(errors)
    return
  }

  // hash the password, to securely store on DB
  user.hashPassword()

  // try to save. if fails, the username is already in use
  const userRepository = AppDataSource.manager.getRepository(User)
  try {
    await userRepository.save(user)
  } catch (e) {
    res.status(400).send("username already in use")
  }

  // if all ok, send 201 response
  res.status(201).send("User created")
}
