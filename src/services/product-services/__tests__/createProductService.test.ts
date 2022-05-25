import { getProductRepoResponse } from "../../../utils/test-utils/getProductRepoResponse"
import createProductService from "../createProductService"

jest.mock("../../../database/dataSource", () => ({
  manager: { getRepository: jest.fn() },
}))

describe("Create Product Service", () => {
  it("returns an error when product name already exists", () => {
    const productName = "uva"
    const userRepo = getProductRepoResponse(productName)
    createProductService({ name: productName })

    expect(userRepo.findOne).toBeCalled()
  })
})
