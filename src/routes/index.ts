import { Router } from "express"
import auth from "./auth"
import user from "./user"
import product from "./product"

const routes = Router()

routes.use("/auth", auth)
routes.use("/user", user)
routes.use("/api", product)

export default routes
