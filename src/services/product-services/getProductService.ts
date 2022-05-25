import AppDataSource from "../../database/dataSource"
import { Product } from "../../entities/Product"
import { validate } from "uuid"

type GetProductType = {
  id: string
}

const getProductService = async ({
  id,
}: GetProductType): Promise<Product | Error> => {
  const { manager } = AppDataSource
  const repo = manager.getRepository(Product)

  const isValid = validate(id)
  if (!isValid) return new Error("Invalid ID")

  const product = await repo.findOne({ where: { id } })
  if (!product) {
    return new Error("Product doesn't exist")
  }

  return product
}

export default getProductService
