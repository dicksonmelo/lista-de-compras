import AppDataSource from "../../database/dataSource"
import { Product } from "../../entities/Product"

type ProductUpdateRequest = {
  id: string
  name: string
}

const { manager } = AppDataSource

const updateProductService = async ({ id, name }: ProductUpdateRequest) => {
  const repo = manager.getRepository(Product)
  
  const product = await repo.findOne({ where: { id } })

  if (!product) {
    return new Error("Product doesn't exist")
  }

  product.name = name ? name : product.name

  await repo.save(product)

  return product
}

export default updateProductService
