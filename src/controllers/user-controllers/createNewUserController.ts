import { validate } from "class-validator"
import { Request, Response } from "express"
import AppDataSource from "@database/dataSource"
import { User } from "@entities/User"

export const createNewUserController = async (req: Request, res: Response) => {
  // get parameters from the body
  let { email, password } = req.body

  let user = new User()

  user.email = email
  user.password = password

  // validate if the parameters are ok
  const errors = await validate(user)
  if (errors.length > 0) {
    res.status(400).send(errors)
    return
  }

  // hash the password, to securely store on DB
  user.hashPassword()

  // try to save. if fails, the email is already in use
  const userRepository = AppDataSource.manager.getRepository(User)
  try {
    await userRepository.save(user)
  } catch (e) {
    res.status(400).send("Email already in use")
  }

  // if all ok, send 201 response
  res.status(201).send("User created")
}
