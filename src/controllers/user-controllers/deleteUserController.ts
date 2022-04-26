import { User } from "entities/User"
import { Request, Response } from "express"
import AppDataSource from "database/dataSource"

export const deleteUserController = async (req: Request, res: Response) => {
  //Get the ID from the url
  const id: unknown = req.params.id

  const userRepository = AppDataSource.manager.getRepository(User)
  let user: User
  try {
    user = await userRepository.findOneOrFail(id)
  } catch (error) {
    res.status(404).send("User not found")
    return
  }
  userRepository.delete(id)

  //After all send a 204 (no content, but accepted) response
  res.status(204).send()
}
