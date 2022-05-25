import AppDataSource from "../../database/dataSource"

type FindOneOptions = {
    userId: string,
    username?: string,
    checkIfUnencryptedPasswordIsValid?: boolean
}

export const getUserRepoResponse = (options: FindOneOptions) => {
    const {userId, username, checkIfUnencryptedPasswordIsValid} = options

    const userRepo = {
      findOne: jest.fn().mockResolvedValueOnce({
        userId,
        username,
        checkIfUnencryptedPasswordIsValid: jest.fn().mockReturnValue(checkIfUnencryptedPasswordIsValid),
      }),
    }
    jest
      .mocked(AppDataSource.manager.getRepository)
      .mockReturnValueOnce(userRepo as never)

    return userRepo
  }