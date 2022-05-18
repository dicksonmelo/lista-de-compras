import { NextFunction, Request, Response } from "express"
import { deleteProductService } from "../../services/product-services"

export const deleteProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  const result = deleteProductService(id)

  if (result instanceof Error) {
    res.status(400).json(result.message)
    next()
    return
  }

  res.status(204).end()
  next()
  return
}
