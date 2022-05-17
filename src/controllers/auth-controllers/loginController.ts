import { Request, Response } from "express"
import { loginService } from "../../services/auth-services/loginService"

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = await req.body
  const token = await loginService({ username, password })

  if (token instanceof Error) {
    return res.status(400).send(token.message)
  }

  return res.send(token)
}
