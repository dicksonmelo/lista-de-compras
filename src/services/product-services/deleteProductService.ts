import { Product } from "../../entities/Product"
import AppDataSource from "../../database/dataSource"

const { manager } = AppDataSource

export const deleteProductService = async (id: string) => {
  const repo = manager.getRepository(Product)

  if (!(await repo.findOne({ where: { id } }))) {
    return new Error("Product doesn't exist")
  }

  await repo.delete(id)
}
