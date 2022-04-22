import { Request, Response } from "express"
import { GetAllProductsService } from "../services/GetAllProductsService"

export class GetAllProductsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllProductsService()

    const products = await service.execute()

    return response.json(products)
  }
}
