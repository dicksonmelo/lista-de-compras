import { NextFunction, Request, Response } from "express"
import { createProductService } from "../../services/product-services/"

export const createProductController = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { name } = await request.body

  const creationResult = await createProductService({ name })

  if (creationResult instanceof Error) {
    response.status(400).json(creationResult.message)
    next()
    return
  }

  response.json(creationResult)
  next()
  return
}
