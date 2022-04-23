import { Request, Response } from "express"
import { createProductService } from "../services/product-services/createProductService"

export const createProductController = async (
  request: Request,
  response: Response
) => {
  const { name } = await request.body

  const creationResult = await createProductService({ name })

  if (creationResult instanceof Error) {
    return response.status(400).json(creationResult)
  }

  return response.json(creationResult)
}
