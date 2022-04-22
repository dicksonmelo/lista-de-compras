import { Response, Request } from "express"
import { UpdateProductService } from "../services/UpdateProductService"

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const { name, description } = request.body

    const service = new UpdateProductService()

    const result = await service.execute({ id, name })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }
}
