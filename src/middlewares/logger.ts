import { Request, Response, NextFunction } from "express"

export default (req: Request, res: Response, next: NextFunction) => {
  const { method, originalUrl } = req
  const time = new Date()

  const message = `[${time.toLocaleTimeString(
    "pt-BR",
  )}] - \x1b[36m[${method}]\x1b[0m - [${originalUrl}] - [${res.statusCode} ${
    res.statusMessage
  }]`

  console.log(message)

  next()
}
