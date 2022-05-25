import "reflect-metadata"
import request from "supertest"
import jwt from "jsonwebtoken"
import AppDataSource from "../../../database/dataSource"
import config from "../../../config/config"
const app = require("../../../utils/test-utils/testServer")

describe("getAllProductsController", () => {
  const userId = "1"
  const username = "dicksonmelo"

  describe("GET /products", () => {
    beforeAll(async () => {
      await AppDataSource.initialize()
    })

    afterAll(async () => {
      await AppDataSource.destroy()
    })

    it("should return 200 and valid response if request param list is empty", async () => {
      //arrange
      const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
        expiresIn: "12h",
      })

      // act
      const response = await request(app)
        .get("/api/products")
        .set("auth", newToken)

      // assert
      expect(response.status).toEqual(200)
    })
  })
})
