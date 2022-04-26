import { User } from "../../entities/User"
import { Response, Request } from "express"
import AppDataSource from "../../database/dataSource"
import { FindOperator } from "typeorm"

export const getUserController = async (req: Request, res: Response) => {
  // ge the id from the url
  const id: string | FindOperator<string> = req.params.id

  // get the user from the database
  const userRepository = AppDataSource.manager.getRepository(User)
  let user: User
  try {
    user = await userRepository.findOneOrFail({ where: { id } })
    res.status(200).send(user)
  } catch (error) {
    res.status(404).send("User not found")
  }
}
