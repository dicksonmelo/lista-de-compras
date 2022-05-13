import swaggerJSDoc, { Options } from "swagger-jsdoc"

const swaggerConfig: Options = {
  definition: {
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
  },
  apis: ["../routes/product.ts"]
}

export default swaggerJSDoc(swaggerConfig)