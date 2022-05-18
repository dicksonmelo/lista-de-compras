import { NextFunction, Request, Response } from "express"
import { loginService } from "../../services/auth-services/loginService"

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = await req.body
  const token = await loginService({ username, password })

  if (token instanceof Error) {
    res.status(400).send(token.message)
    next()
    return
  }

  res.send(token)
  next()
  return
}
