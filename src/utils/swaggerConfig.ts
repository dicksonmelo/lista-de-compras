import swaggerJSDoc, { Options } from "swagger-jsdoc"
import {
  deleteProduct,
  getProductById,
  getProducts,
  postProducts,
  updateProduct,
} from "./productConfig"

const swaggerConfig: Options = {
  definition: {
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          name: "auth",
          in: "header",
        },
      },
    },
    openapi: "3.0.0",
    info: {
      title: "Lista de Compras Express API",
      version: "0.1.0",
      description: "This is an shopping application made with express.",
      contact: {
        name: "Dickson Melo",
        url: "https://github.com/dicksonmelo",
        email: "dicksonmelo@gmail.com",
      },
    },
    servers: [{ url: "http://localhost:3000/" }],
    paths: {
      "/api/products": {
        ...getProducts,
        ...postProducts,
      },
      "/api/products/{id}": {
        ...getProductById,
        ...deleteProduct,
        ...updateProduct
      },
    },
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
    definitions: {
      User: {
        properties: {
          email: {
            type: "string",
            description: "User email",
          },
        },
      },
    },
  },
  apis: ["../routes/product.ts"],
}

export default swaggerJSDoc(swaggerConfig)
