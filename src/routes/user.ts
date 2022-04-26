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
router.get("/:id", [checkJwt, checkRole(["ADMIN"])], getOneByIdController)

//Create a new user
router.post("/", createNewUserController)

//Edit one user
router.patch("/:id", [checkJwt, checkRole(["ADMIN"])], editUserController)

//Delete one user
router.delete("/:id", [checkJwt, checkRole(["ADMIN"])], deleteUserController)

export default router
