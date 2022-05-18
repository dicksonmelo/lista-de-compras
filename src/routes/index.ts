import { Router } from "express"
import auth from "./auth"
import user from "./user"
import product from "./product"
import swaggerConfig from "../utils/swaggerConfig"
import swaggerUi from "swagger-ui-express"
import logger from "../middlewares/logger"

const routes = Router()

routes.use("/auth", auth, logger)
routes.use("/user", user, logger)
routes.use("/api", product, logger)
routes.use("/api-docs", swaggerUi.serve)
routes.get("/api-docs", swaggerUi.setup(swaggerConfig))

export default routes
