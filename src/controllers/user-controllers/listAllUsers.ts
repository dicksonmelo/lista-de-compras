import { Request, Response } from "express"
import listAllUsersService from "../../services/user-services/listAllUsersService"

export const listAll = async (req: Request, res: Response) => {
  const users = await listAllUsersService()

  res.send(users)
}
