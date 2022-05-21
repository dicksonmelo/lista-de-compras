import { NextFunction, Request, Response } from "express"
import { checkJwt } from "../checkJwt"

describe("JWT verification", () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  let nextFunction: NextFunction = jest.fn()

  beforeEach(() => {
    mockRequest = {}
    mockResponse = {
      json: jest.fn(),
    }
  })

  it("should return an error when given token is invalid", async () => {
    mockRequest = {
      headers: {
        auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI4N2QzNzlmNy1hOTQ0LTQ5MDMtYjM3MS02NjllZDhjZGIxMzQiLCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjUyOTA2MzEzLCJleHAiOjE2NTI5MjQzMTN9.5u2wtw1n1F8sFTKnI2M0QBA88vNl68JOn-KvNaznnGo",
      },
    }

    expect(
      checkJwt(mockRequest as Request, mockResponse as Response, nextFunction)
    ).toBeInstanceOf(Error)
  })
})
