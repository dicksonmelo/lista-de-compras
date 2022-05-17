import { Response, Request } from "express"
import { updateProductService } from "../../services/product-services/"

export const updateProductController = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name } = req.body

  const result = await updateProductService({ id, name })

  if (result instanceof Error) {
    return res.status(400).json(result.message)
  }

  return res.json(result)
}
