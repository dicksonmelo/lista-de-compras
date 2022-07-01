import { NextFunction, Request, Response } from "express"
import { JsonWebTokenError } from "jsonwebtoken"
import { checkJwt } from "../checkJwt"

describe("JWT verification", () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  const nextFunction: NextFunction = jest.fn()

  beforeEach(() => {
    mockRequest = {}
    mockResponse = {
      json: jest.fn(),
    }
  })

  it("should return an error when given token is invalid", async () => {
    mockRequest = {
      headers: {
        auth: "abc",
      },
    }

    let result: JsonWebTokenError | string
    try {
      checkJwt(mockRequest as Request, mockResponse as Response, nextFunction)
    } catch (e) {
      result = e.name
    }

    expect(result).toBe("JsonWebTokenError")
  })

  it("should return expired error for expired token", async () => {
    mockRequest = {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4N2QzNzlmNy1hOTQ0LTQ5MDMtYjM3MS02NjllZDhjZGIxMzQiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjUyODYzNDc5LCJleHAiOjE2NTI4ODE0Nzl9.ZhFQAqEgH8XSWhme76YPuPP3mbTmpRQvjdtnq16Ft18",
      },
    }

    let result: JsonWebTokenError | string
    try {
      checkJwt(mockRequest as Request, mockResponse as Response, nextFunction)
    } catch (e) {
      result = e.name
    }

    expect(result).toBe("TokenExpiredError")
  })
})
