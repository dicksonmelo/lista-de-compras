import AppDataSource from "../database/dataSource"
import { Product } from "../entities/Product"

const { manager } = AppDataSource
export class GetAllProductsService {
  async execute() {
    const repo = manager.getRepository(Product)

    const products = await repo.find()

    return products
  }
}
