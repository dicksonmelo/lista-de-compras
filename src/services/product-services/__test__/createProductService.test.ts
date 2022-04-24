import createProduct from "../createProductService"

describe("Create Product Service", () => {
  it("returns a new product when the operations is done", async () => {
    const result = await createProduct({ name: "Batata" })

    console.log(result)
  })
})
