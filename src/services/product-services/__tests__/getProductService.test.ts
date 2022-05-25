import { getProductRepoResponse } from "../../../utils/test-utils/productMocks"
import getProductService from "../getProductService"

jest.mock("../../../database/dataSource", () => ({
  manager: { getRepository: jest.fn() },
}))

describe("Get Product Service", () => {
  const validProduct = {
    id: "a17bcfd4-b4c2-4a7f-8c3d-390cdbe5dced",
    name: "Uva",
    createdAt: new Date(),
  }

  const invalidProduct = {
    id: "invalidID",
    name: "Uva",
    createdAt: new Date(),
  }

  it("returns one product when it can find a valid id", async () => {
    const repoResponse = getProductRepoResponse({
      findOne: true,
      product: validProduct,
    })
    const serviceResponse = await getProductService({
      id: validProduct.id,
    })

    expect(repoResponse.findOne).toBeCalled()
    expect(serviceResponse).not.toBeInstanceOf(Error)
  })

  it("returns an ID ERROR when id is invalid", async () => {
    const repoResponse = getProductRepoResponse({
      findOne: true,
      product: invalidProduct,
    })

    const serviceResponse = await getProductService({
      id: invalidProduct.id,
    })

    expect(repoResponse.findOne).toBeCalledTimes(0)
    expect(serviceResponse).toBeInstanceOf(Error)
    expect(serviceResponse).toMatchObject({ message: "Invalid ID" })
  })

  it("returns an error when doesn't exist", async () => {
    const repoResponse = getProductRepoResponse({
      findOne: false,
      product: validProduct,
    })

    const serviceResponse = await getProductService({
      id: validProduct.id,
    })

    expect(repoResponse.findOne).toBeCalledTimes(1)
    expect(serviceResponse).toBeInstanceOf(Error)
    expect(serviceResponse).toMatchObject({ message: "Product doesn't exist" })
  })
})
