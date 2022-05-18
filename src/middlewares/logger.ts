import { Request, Response, NextFunction } from "express"

export default (req: Request, res: Response, next: NextFunction) => {
  const { method, originalUrl } = req
  const time = new Date()

  const message: string = `[${time.toLocaleTimeString(
    "pt-BR"
  )}] - [${method}] - [${originalUrl}]`
  
  console.log(message, res.locals)

  next()
}
