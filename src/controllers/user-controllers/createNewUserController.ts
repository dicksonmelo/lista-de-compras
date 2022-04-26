import { createNewUserService } from "../../services/auth-services/createNewUserService"
import { validate } from "class-validator"
import { Request, Response } from "express"
import AppDataSource from "../../database/dataSource"
import { User } from "../../entities/User"

export const createNewUserController = async (req: Request, res: Response) => {
  // get parameters from the body
  const { username, password, role } = req.body

  const creationResult = await createNewUserService({
    username,
    password,
    role,
  })

  if (creationResult instanceof Error) {
    return res.status(400).json(creationResult)
  }

  // if all ok, send 201 response
  return res.status(201).send(creationResult)
}
