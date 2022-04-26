import { User } from "../../entities/User"
import { Response, Request } from "express"
import AppDataSource from "@database/dataSource"

export const getOneByIdController = async (req: Request, res: Response) => {
  // ge the id from the url
  const id: unknown = req.params.id

  // get the user from the database
  const userRepository = AppDataSource.manager.getRepository(User)
  let user: User
  try {
    user = await userRepository.findOneOrFail(id)
  } catch (error) {
    res.status(404).send("User not found")
  }
}
