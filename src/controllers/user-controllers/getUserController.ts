import { NextFunction, Request, Response } from "express"
import getUserService from "../../services/user-services/getUserService"
import { FindOperator } from "typeorm"

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id: string | FindOperator<string> = req.params.id

  const user = await getUserService({ id })

  if (user instanceof Error) {
    res.status(404).send(user.message)
    next()
    return
  }

  res.status(200).send(user)
  next()
  return
}
