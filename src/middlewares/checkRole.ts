import { NextFunction, Request, Response } from "express"
import AppDataSource from "../database/dataSource"
import { User } from "../entities/User"

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId

    //Get user role from the database
    const userRepository = AppDataSource.manager.getRepository(User)
    let user: User
    try {
      user = await userRepository.findOneOrFail({ where: { id } })
    } catch (id) {
      res.status(401).send()
      return
    }

    //Check if array of authorized roles includes the user's role
    if (roles.indexOf(user.role) > -1) next()
    else res.status(401).send()
  }
}
