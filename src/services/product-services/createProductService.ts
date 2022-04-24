import AppDataSource from "../../database/dataSource"
import { Product } from "../../entities/Product"

const { manager } = AppDataSource

type ProductRequest = {
  name: string
}

const createProductService = async ({
  name,
}: ProductRequest): Promise<Product | Error> => {
  const repo = manager.getRepository(Product)

  if (await repo.findOne({ where: { name } })) {
    return new Error("Product already exists")
  }

  const product = repo.create({
    name,
  })

  await repo.save(product)

  return product
}

export default createProductService
