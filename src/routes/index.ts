import { Router } from "express"
import auth from "./auth"
import user from "./user"
import product from "./product"
import swaggerConfig from "../utils/swaggerConfig"
import swaggerUi from 'swagger-ui-express'

const routes = Router()

routes.use("/auth", auth)
routes.use("/user", user)
routes.use("/api", product)
routes.use("/api-docs", swaggerUi.serve)
routes.get("/api-docs", swaggerUi.setup(swaggerConfig))

export default routes
