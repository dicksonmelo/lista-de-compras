import { validate } from "class-validator"
import { Request, Response } from "express"
import updateUserService from "services/user-services/updateUserService"
import AppDataSource from "../../database/dataSource"
import { User } from "../../entities/User"

export const updateUserController = async (req: Request, res: Response) => {
  const id: string = req.params.id
  const { username } = req.body

  const result = updateUserService({ id, username })
  if (result instanceof Error) {
    return res.status(400).send(result.message)
  }

  res.status(200).send(result)
}
