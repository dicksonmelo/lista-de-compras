import { User } from "../../entities/User"
import { Request, Response } from "express"
import AppDataSource from "../../database/dataSource"
import deleteUserService from "../../services/user-services/deleteUserService"

export const deleteUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id

  const result = deleteUserService({ id })
  if (result instanceof Error) {
    return res.status(404).send(result.message)
  }

  return res.status(204).send()
}
