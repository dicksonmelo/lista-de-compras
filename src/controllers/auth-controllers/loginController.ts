import { Request, Response } from "express"
import jwt from "jsonwebtoken"
import AppDataSource from "../../database/dataSource"
import { User } from "../../entities/User"
import config from "../../config/config"
import { loginService } from "../../services/auth-services/loginService"

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = req.body
  const token = await loginService({ username, password })
  res.send(token)
}
