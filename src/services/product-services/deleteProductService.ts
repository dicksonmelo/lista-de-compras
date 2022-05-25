import { Product } from "../../entities/Product"
import AppDataSource from "../../database/dataSource"

const { manager } = AppDataSource

const deleteProductService = async (id: string) => {
  const repo = manager.getRepository(Product)

  const product = await repo.findOne({ where: { id } })
  if (!product) {
    return new Error("Product doesn't exist")
  }

  await repo.delete(id)
}

export default deleteProductService
