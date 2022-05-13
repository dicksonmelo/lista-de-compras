import { Router } from "express"
import swaggerJSDoc from "swagger-jsdoc"
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductController,
  updateProductController,
} from "../controllers/product-controllers"
import { checkJwt } from "../middlewares/checkJwt"

/** 
 
 @swagger
 components:
  schemas:
    Product:
      type: object
      required:
        - title
        - author
        - finished
      properties:
        id:
          type: integer
          description: The auto-generated id of the book.
        title:
          type: string
          description: The title of your book.
        author:
          type: string
          description: Who wrote the book?
        finished:
          type: boolean
          description: Have you finished reading it?
        createdAt:
          type: string
          format: date
          description: The date of the record creation.
      example:
         title: The Pragmatic Programmer
         author: Andy Hunt / Dave Thomas
         finished: true
*/

const routes = Router()
routes.post("/products", [checkJwt], createProductController)
routes.get("/products", [checkJwt], getAllProductsController)
routes.get("/products/:id", [checkJwt], getProductController)
routes.delete("/products/:id", [checkJwt], deleteProductController)
routes.put("/products/:id", [checkJwt], updateProductController)

export default routes
