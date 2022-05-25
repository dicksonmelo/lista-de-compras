import AppDataSource from "../../database/dataSource"
import { Product } from "../../entities/Product"

type ProductMockType = {
  id: string
  name: string
  createdAt: Date
}

type CreateProductMockType = {
  findOne: boolean
  product: ProductMockType
}

type DeleteProductMockType = {
  findOne: boolean
  delete: {}
}

type GetProductMockType = {
  findOne: boolean
  product: ProductMockType
}

type UpdateProductMockType = {
  findOne: Product | boolean
  save?: boolean
  product?: Product
}

const mockAppDataSource = (productRepo: any) => {
  jest
    .mocked(AppDataSource.manager.getRepository)
    .mockReturnValueOnce(productRepo as never)
}

export const createProductRepoResponsese = (product: CreateProductMockType) => {
  const productRepo = {
    findOne: jest.fn().mockResolvedValueOnce(product.findOne),
    create: jest.fn().mockReturnValueOnce(product.product),
    save: jest.fn().mockResolvedValueOnce(true),
  }

  mockAppDataSource(productRepo)

  return productRepo
}

export const deleteProductRepoResponse = (product: DeleteProductMockType) => {
  const productRepo = {
    findOne: jest.fn().mockResolvedValueOnce(product.findOne),
    delete: jest.fn().mockResolvedValueOnce({}),
  }

  mockAppDataSource(productRepo)

  return productRepo
}

export const getProductRepoResponse = (product: GetProductMockType) => {
  const productRepo = {
    findOne: jest.fn().mockResolvedValueOnce(product.findOne),
    product: jest.fn().mockReturnValueOnce(product.product),
  }

  mockAppDataSource(productRepo)

  return productRepo
}

export const updateProductRepoResponse = (product: UpdateProductMockType) => {
  const productRepo = {
    findOne: jest.fn().mockResolvedValueOnce(product.findOne),
    save: jest.fn().mockReturnValueOnce(product.product),
  }

  mockAppDataSource(productRepo)

  return productRepo
}
