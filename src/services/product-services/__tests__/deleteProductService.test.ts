import { deleteProductRepoResponse } from "../../../utils/test-utils/productMocks"
import deleteProductService from "../deleteProductService"

jest.mock("../../../database/dataSource", () => ({
  manager: { getRepository: jest.fn() },
}))

describe("Delete Product Service", () => {
  const product = {
    id: "1",
    name: "Uva",
    createdAt: new Date(),
  }

  it("returns and error when product doesn't exist", async () => {

    const productResponse = deleteProductRepoResponse({
      findOne: false,
      delete: product,
    })

    const serviceReturn = await deleteProductService(product.id)

    expect(productResponse.findOne).toBeCalled()
    expect(productResponse.delete).toBeCalledTimes(0)
    expect(serviceReturn).toBeInstanceOf(Error)
    expect(serviceReturn.message).toEqual("Product doesn't exist")
  })

  it("returns nothing when delete operation is done", async () => {
    const productResponse = deleteProductRepoResponse({
      findOne: true,
      delete: product,
    })

    const serviceReturn = await deleteProductService(product.id)

    expect(productResponse.findOne).toBeCalled()
    expect(productResponse.delete).toBeCalledTimes(1)
    expect(serviceReturn).toBeUndefined()
  })
})
