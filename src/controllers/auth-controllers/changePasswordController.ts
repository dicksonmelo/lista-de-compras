import { Request, Response } from "express"
import AppDataSource from "../../database/dataSource"
import { validate } from "class-validator"
import { User } from "../../entities/User"
import { changePasswordService } from "../../services/auth-services/changePasswordService"

export const changePassword = async (req: Request, res: Response) => {
  const id = res.locals.jwtPayload.userId
  const { oldPassword, newPassword } = req.body

  const passwordResult = changePasswordService({ id, oldPassword, newPassword })

  if (passwordResult instanceof Error) {
    return res.status(400).send(passwordResult.message)
  }

  res.status(204).send()
}
