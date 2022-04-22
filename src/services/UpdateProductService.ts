import AppDataSource from "../database/dataSource"
import { Product } from "../entities/Product"

type ProductUpdateRequest = {
  id: string
  name: string
}

export class UpdateProductService {
  async execute({ id, name }: ProductUpdateRequest) {
    const repo = AppDataSource.manager.getRepository(Product)

    const product = await repo.findOne({ where: { id } })

    if (!product) {
      return new Error("Category does not exist")
    }

    product.name = name ? name : product.name

    await repo.save(product)

    return product
  }
}
