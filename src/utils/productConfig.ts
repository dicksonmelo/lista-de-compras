export const getProducts = {
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
}

export const getProductById = {
  get: {
    tags: ["Product"],
    summary: "Product",
    parameters: [
      {
        name: "id",
        required: true,
        in: "path",
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      "200": {
        description: "Get one product",
        content: {
          "application/json": {
            schema: {
              type: "object",
            },
          },
        },
      },
    },
  },
}

export const postProducts = {
  post: {
    tags: ["Product"],
    requestBody: {
      description: "fazer o post",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
            },
          },
        },
      },
    },
    responses: {
      "201": {
        description: "Post a new product.",
        schema: {
          type: "object",
        },
      },
    },
  },
}

export const deleteProduct = {
  delete: {
    tags: ["Product"],
    summary: "Product",
    parameters: [
      {
        name: "id",
        required: true,
        in: "path",
        schema: {
          type: "string",
        },
      },
    ],
    responses: {
      "204": {
        description: "Delete a product by id",
      },
    },
  },
}

export const updateProduct = {
  put: {
    tags: ["Product"],
    parameters: [
      {
        name: "id",
        required: true,
        in: "path",
        schema: {
          type: "string",
        },
      },
    ],
    requestBody: {
      description: "fazer o post",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
            },
          },
        },
      },
    },
    responses: {
      "200": {
        description: "Update a product.",
        schema: {
          type: "object",
        },
      },
    },
  },
}
