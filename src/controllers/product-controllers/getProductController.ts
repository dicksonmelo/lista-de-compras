import { NextFunction, Request, Response } from "express"
import { getProductService } from "../../services/product-services/"

export const getProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params

  const product = await getProductService({ id })

  if (product instanceof Error) {
    res.status(400).json(product.message)
    next()
    return
  }

  res.json(product)
  next()
  return
}
