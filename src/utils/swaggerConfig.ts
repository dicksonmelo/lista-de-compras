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
    servers: [{ url: "http://localhost:3000/" }],
    paths: {
      "/api/product": {
        get: {
          tags: ["Product"],
          summary: "Product",
          responses: {
            "200": {
              description: "Get all products available.",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      type: "object",
                    },
                  },
                },
              },
            },
          },
        },
        post: {
          tags: ["Product"],
          parameters: [
            {
              name: "name",
              in: "body",
              required: true,
              example: {
                name: "uva"
              }
            },
          ],
          responses: {
            "200": {
              description: "Post a new product.",
              schema: {
                type: "array",
              },
            },
          },
        },
      },
    },
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
