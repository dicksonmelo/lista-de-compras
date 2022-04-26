import { Router } from "express"
import {
  createNewUserController,
  deleteUserController,
  editUserController,
  getOneByIdController,
  listAll,
} from "../controllers/user-controllers/"
import { checkJwt } from "../middlewares/checkJwt"
import { checkRole } from "../middlewares/checkRole"

const router = Router()

// get all users
router.get("/", [checkJwt, checkRole(["ADMIN"])], listAll)

// Get one user
router.get(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  getOneByIdController
)

//Create a new user
router.post("/", [checkJwt, checkRole(["ADMIN"])], createNewUserController)

//Edit one user
router.patch(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  editUserController
)

//Delete one user
router.delete(
  "/:id([0-9]+)",
  [checkJwt, checkRole(["ADMIN"])],
  deleteUserController
)

export default router
