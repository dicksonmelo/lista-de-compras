import { NextFunction, Request, Response } from "express"
import updateUserService from "../../services/user-services/updateUserService"

export const updateUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id
  const { username } = req.body

  const result = updateUserService({ id, username })
  if (result instanceof Error) {
    res.status(400).send(result.message)
    next()
    return
  }

  res.status(200).send(result)
  next()
  return
}
