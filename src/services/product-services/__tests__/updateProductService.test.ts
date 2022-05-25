import { Product } from "../../../entities/Product"
import { updateProductRepoResponse } from "../../../utils/test-utils/productMocks"
import updateProductService from "../updateProductService"

jest.mock("../../../database/dataSource", () => ({
  manager: { getRepository: jest.fn() },
}))

describe("Update Product Service", () => {
  const product: Product = {
    id: "1",
    name: "Uva",
    created_at: new Date(),
  }

  it("returns an error when product doesn't exist", async () => {
    const productResponse = updateProductRepoResponse({
      findOne: false,
    })

    const serviceReturn = await updateProductService(product)

    expect(serviceReturn).toBeInstanceOf(Error)
    expect(productResponse.save).toBeCalledTimes(0)
    expect(serviceReturn).toMatchObject({ message: "Product doesn't exist" })
  })

  it("returns an error when product doesn't exist", async () => {
    const productResponse = updateProductRepoResponse({
      findOne: product,
      product,
    })

    const serviceReturn = await updateProductService({
      id: "1",
      name: "amoeba",
    })

    expect(serviceReturn).not.toBeInstanceOf(Error)
    expect(productResponse.save).toBeCalledTimes(1)
    expect(serviceReturn).toMatchObject({ id: "1", name: "amoeba" })
  })
})
