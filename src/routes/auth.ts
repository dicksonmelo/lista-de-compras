import { Router } from "express"
import { changePassword } from "../controllers/auth-controllers/changePasswordController"
import { loginController } from "../controllers/auth-controllers/loginController"
import { checkJwt } from "../middlewares/checkJwt"

const router = Router()

router.post("/login", loginController)

router.post("/change-password", [checkJwt], changePassword)

export default router
