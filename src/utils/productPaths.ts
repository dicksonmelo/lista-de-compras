export const productPaths = {
  "/api/products": {
    get: {
      tags: ["Product"],
      summary: "Product",
      security: {
        ApiKeyAuth: [],
      },
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
      security: {
        ApiKeyAuth: [],
      },
      parameters: [
        {
          name: "name",
          in: "body",
          required: true,
          example: {
            name: "uva",
          },
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
}
