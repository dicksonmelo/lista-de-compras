import { Router } from "express"
import {
  createNewUserController,
  deleteUserController,
  updateUserController,
  getUserController,
  listAll,
} from "../controllers/user-controllers/"
import { checkJwt } from "../middlewares/checkJwt"
import { checkRole } from "../middlewares/checkRole"

const router = Router()

router.get("/", [checkJwt, checkRole(["ADMIN"])], listAll)
router.get("/:id", [checkJwt, checkRole(["ADMIN"])], getUserController)
router.post("/", createNewUserController)
router.patch("/:id", [checkJwt, checkRole(["ADMIN"])], updateUserController)
router.delete("/:id", [checkJwt, checkRole(["ADMIN"])], deleteUserController)

export default router
