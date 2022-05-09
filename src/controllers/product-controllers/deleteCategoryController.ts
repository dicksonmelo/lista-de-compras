import { Request, Response } from "express"
import { deleteProductService } from "../../services/product-services"

export const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params

  const result = deleteProductService(id)

  if (result instanceof Error) {
    return res.status(400).json(result.message)
  }

  return res.status(204).end()
}
