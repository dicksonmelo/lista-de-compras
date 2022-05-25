import AppDataSource from "../../database/dataSource"

export const getProductRepoResponse = (productName: string) => {
  const productRepo = {
    findOne: jest.fn().mockResolvedValue({
      id: "1",
      name: productName,
      createdAt: new Date(),
    }),
  }

  jest
    .mocked(AppDataSource.manager.getRepository)
    .mockReturnValueOnce(productRepo as never)

  return productRepo
}
