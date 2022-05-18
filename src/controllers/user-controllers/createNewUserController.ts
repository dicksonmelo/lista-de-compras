import { NextFunction, Request, Response } from "express"
import createNewUserService from "../../services/user-services/createNewUserService"

export const createNewUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password, role } = req.body

  const creationResult = await createNewUserService({
    username,
    password,
    role,
  })

  if (creationResult instanceof Error) {
    res.status(400).json(creationResult)
    next()
    return
  }

  res.status(201).send(creationResult)
  next()
  return
}
