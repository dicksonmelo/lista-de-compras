import AppDataSource from "../../database/dataSource"
import { Product } from "../../entities/Product"

const getProductService = async ({ id }) => {
  const { manager } = AppDataSource
  const repo = manager.getRepository(Product)

  const product = await repo.findOne({ where: { id } })

  if (!product) {
    return new Error("Product doesn't exist")
  }

  return product
}

export default getProductService
