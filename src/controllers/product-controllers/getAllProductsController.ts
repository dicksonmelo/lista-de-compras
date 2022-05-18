import { NextFunction, Request, Response } from "express"
import { getAllProductsService } from "../../services/product-services/"

export const getAllProductsController = async (req: Request, res: Response, next: NextFunction) => {
  const products = await getAllProductsService()

  res.json(products)
  next()
  return
}
