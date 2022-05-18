import { NextFunction, Request, Response } from "express"
import deleteUserService from "../../services/user-services/deleteUserService"

export const deleteUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string = req.params.id

  const result = deleteUserService({ id })
  if (result instanceof Error) {
    res.status(404).send(result.message)
    next()
    return
  }

  res.status(204).send()
  next()
  return
}
