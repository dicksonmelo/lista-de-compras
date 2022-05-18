import { NextFunction, Request, Response } from "express"
import { changePasswordService } from "../../services/auth-services/changePasswordService"

export const changePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = res.locals.jwtPayload.userId
  const { oldPassword, newPassword } = req.body

  const passwordResult = changePasswordService({ id, oldPassword, newPassword })

  if (passwordResult instanceof Error) {
    res.status(400).send(passwordResult.message)
    next()
    return
  }

  res.status(204).send()
  next()
  return
}
