import { NextFunction, Request, Response } from "express"
import listAllUsersService from "../../services/user-services/listAllUsersService"

export const listAll = async (req: Request, res: Response, next: NextFunction) => {
  const users = await listAllUsersService()

  res.send(users)
  next()
  return
}
