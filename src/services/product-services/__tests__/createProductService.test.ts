import { createProductRepoResponsese } from "../../../utils/test-utils/productMocks"
import createProductService from "../createProductService"

jest.mock("../../../database/dataSource", () => ({
  manager: { getRepository: jest.fn() },
}))

describe("Create Product Service", () => {
  const product = {
      id: "1",
      name: "Uva",
      createdAt: new Date(),
    }
  it("returns an error when product name already exists", async () => {
    const productResponse = createProductRepoResponsese({
      findOne: true,
      product
    })

    const returned = await createProductService({ name: "Uva" })

    expect(productResponse.findOne).toBeCalled()
    expect(productResponse.create).toBeCalledTimes(0)
    expect(productResponse.save).toBeCalledTimes(0)
    expect(returned).toBeInstanceOf(Error)
  })

  it("returns a product when can't find a product with same name", async () => {
    const productResponse = createProductRepoResponsese({
      findOne: false,
      product
    })

    const returned = await createProductService({ name: "Uva" })

    expect(productResponse.findOne).toBeCalled()
    expect(productResponse.create).toBeCalledTimes(1)
    expect(productResponse.save).toBeCalledTimes(1)
    expect(returned).not.toBeInstanceOf(Error)
  })
})
