import { Request, Response } from "express"
import { DeleteProductService } from "../services/DeleteProductService"

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const service = new DeleteProductService()

    const result = service.execute(id)

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.status(204).end()
  }
}
