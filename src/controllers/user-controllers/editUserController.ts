import { validate } from "class-validator"
import { Request, Response } from "express"
import AppDataSource from "../../database/dataSource"
import { User } from "../../entities/User"

export const editUserController = async (req: Request, res: Response) => {
  // get the id from the url
  const id: unknown = req.params.id

  //get values from the body
  const { username } = req.body

  // try to find user on database
  const userRepository = AppDataSource.manager.getRepository(User)
  let user: User
  try {
    user = await userRepository.findOneOrFail(id)
  } catch (error) {
    res.status(404).send("User not found")
    return
  }

  user.username = username
  const errors = await validate(user)
  if (errors.length > 0) {
    res.status(400).send(errors)
    return
  }

  try {
    await userRepository.save(user)
  } catch (e) {
    res.status(409).send("username already in use")
    return
  }
  //After all send a 204 (no content, but accepted) response
  res.status(204).send()
}
