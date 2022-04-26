import { Request, Response } from "express"
import AppDataSource from "database/dataSource"
import { User } from "entities/User"

export const listAll = async (req: Request, res: Response) => {
  //Get users from database
  const userRepository = AppDataSource.manager.getRepository(User)
  const users = await userRepository.find({
    select: ["id", "email", "role"], //We dont want to send the passwords on response
  })

  //Send the users object
  res.send(users)
}
