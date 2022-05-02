import { Request, Response } from "express"
import getUserService from "services/user-services/getUserService"
import { FindOperator } from "typeorm"

export const getUserController = async (req: Request, res: Response) => {
  const id: string | FindOperator<string> = req.params.id

  const user = getUserService({ id })

  if (user instanceof Error) {
    res.status(404).send(user.message)
  }

  res.status(200).send(user)
}
