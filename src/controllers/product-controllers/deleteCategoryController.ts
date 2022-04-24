import { Request, response, Response } from "express"
import { deleteProductService } from "../../services/product-services"

export const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params

  const result = deleteProductService(id)

  if (result instanceof Error) {
    return response.status(400).json(result.message)
  }

  return response.status(204).end()
}
