import { Product } from "../entities/Product"
import AppDataSource from "../database/dataSource"

const { manager } = AppDataSource

export class DeleteProductService {
  async execute(id) {
    const repo = manager.getRepository(Product)

    if (!(await repo.findOne({ where: { id } }))) {
      return new Error("Product does not exist")
    }

    await repo.delete(id)
  }
}
