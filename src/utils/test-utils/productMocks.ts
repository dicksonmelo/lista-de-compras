import AppDataSource from "../../database/dataSource"

type GetProductType = {
  findOne: boolean,
  product: {
    id: string,
    name: string,
    createdAt: Date
  }
}

type DeleteProductType = {
  findOne: boolean,
  delete: {}
}

const mockAppDataSource = (productRepo) => {
  jest
    .mocked(AppDataSource.manager.getRepository)
    .mockReturnValueOnce(productRepo as never)

}

export const getProductRepoResponse = (product: GetProductType) => {
  const productRepo = {
    findOne: jest.fn().mockResolvedValueOnce(product.findOne),
    create: jest.fn().mockReturnValueOnce(product.product),
    save: jest.fn().mockResolvedValueOnce(true)
  }

  mockAppDataSource(productRepo)

  return productRepo
}

export const deleteProductRepoResponse = (product: DeleteProductType) => {
  const productRepo = {
    findOne: jest.fn().mockResolvedValueOnce(product.findOne),
    delete: jest.fn().mockResolvedValueOnce({})
  }

  mockAppDataSource(productRepo)

  return productRepo
}