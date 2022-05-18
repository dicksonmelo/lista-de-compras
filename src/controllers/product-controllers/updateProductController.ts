import { Response, Request, NextFunction } from "express"
import { updateProductService } from "../../services/product-services/"

export const updateProductController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params
  const { name } = req.body

  const result = await updateProductService({ id, name })

  if (result instanceof Error) {
    res.status(400).json(result.message)
    next()
    return
  }

  res.json(result)
  next()
  return
}
