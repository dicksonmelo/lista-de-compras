import { loginService } from "../loginService"
import { getUserRepoResponse } from "../../../utils/test-utils/getUserRepoResponse"

jest.mock("../../../database/dataSource", () => ({
  manager: { getRepository: jest.fn() },
}))

describe("Login Service", () => {
  const userId = "1"
  const username = "dicksonmelo"
  const password = "qualquersenha"

  it("returns a valid token when find an user", async () => {
    const userRepo = getUserRepoResponse({
      userId,
      username,
      checkIfUnencryptedPasswordIsValid: true,
    })
    const result = await loginService({ username, password })
    expect(userRepo.findOne).toBeCalled()
    expect(userRepo.findOne).toReturn()
    expect(result).toBeTruthy()
  })

  it("returns an error when given password is invalid", async () => {
    const userRepo = getUserRepoResponse({
      userId,
      username,
      checkIfUnencryptedPasswordIsValid: false,
    })

    const result = await loginService({ username, password })

    expect(userRepo.findOne).toBeCalled()
    expect(userRepo.findOne).toReturn()
    expect(result).toBeInstanceOf(Error)
    expect(result.message).toStrictEqual("Senha inválida")
  })

})
