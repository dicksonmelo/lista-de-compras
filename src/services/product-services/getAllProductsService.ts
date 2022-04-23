import AppDataSource from "../../database/dataSource"
import { Product } from "../../entities/Product"

const { manager } = AppDataSource

export const getAllProductsService = () => {
  const repo = manager.getRepository(Product)

  const products = repo.find()

  return products
}
