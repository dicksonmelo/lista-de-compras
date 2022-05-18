import { Router } from "express"
import auth from "./auth"
import user from "./user"
import product from "./product"
import swaggerConfig from "../utils/swaggerConfig"
import swaggerUi from "swagger-ui-express"
import logger from "../middlewares/logger"

const routes = Router()

routes.use("/auth", logger, auth)
routes.use("/user", logger, user)
routes.use("/api", logger, product)
routes.use("/api-docs", swaggerUi.serve)
routes.get("/api-docs", swaggerUi.setup(swaggerConfig))

export default routes
