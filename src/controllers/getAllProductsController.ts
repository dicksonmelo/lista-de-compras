import { Request, Response } from "express"
import { getAllProductsService } from "../services/product-services/getAllProductsService"

export const getAllProductsController = async (req: Request, res: Response) => {
  const products = await getAllProductsService()

  return res.json(products)
}
