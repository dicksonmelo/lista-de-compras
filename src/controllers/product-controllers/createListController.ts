import { Response, Request, NextFunction } from "express"
import { createList } from "../../services/product-services"

const createListController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { user_id, list_name } = req.body

  const queryResult = await createList({ user_id, list_name })

  res.send(queryResult)

  next()
  return
}

export default createListController
