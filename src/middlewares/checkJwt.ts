import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import config from "../config/config"

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.headers["auth"]
  const jwtPayload = <any>jwt.verify(token, config.jwtSecret)

  if (jwtPayload instanceof Error) {
    return res.status(401).send(jwtPayload.message)
  }

  res.locals.jwtPayload = jwtPayload

  const { userId, username } = jwtPayload
  const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
    expiresIn: "12h",
  })

  res.setHeader("token", newToken)

  next()
}
