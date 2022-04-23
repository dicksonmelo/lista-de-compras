import { Response, Request } from "express"
import { getProductService } from "../services/product-services/getProductService"

export const getProductController = async (req: Request, res: Response) => {
  const { id } = req.params

  const product = await getProductService({ id })

  if (product instanceof Error) {
    return res.status(400).json(product.message)
  }

  return res.json(product)
}
