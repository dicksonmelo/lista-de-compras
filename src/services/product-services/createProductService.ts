import AppDataSource from "../../database/dataSource"
import { Product } from "../../entities/Product"
import lodash from 'lodash'

const { manager } = AppDataSource

type ProductRequest = {
  name: string
}

const createProductService = async ({
  name,
}: ProductRequest): Promise<Product | Error> => {
  const repo = manager.getRepository(Product)
  const productName = lodash.capitalize(name)

  if (await repo.findOne({ where: { name: productName } })) {
    return new Error("Product already exists")
  }

  const product = repo.create({
    name: productName,
  })

  await repo.save(product)

  return product
}

export default createProductService
