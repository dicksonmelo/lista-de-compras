import { Router } from "express"
import { createProductController } from "./controllers/createProductController"
import { DeleteProductController } from "./controllers/DeleteCategoryController"
import { GetAllProductsController } from "./controllers/GetAllProductsController"
import { UpdateProductController } from "./controllers/UpdateProductController"

const routes = Router()

routes.post("/products", createProductController)
routes.get("/products", new GetAllProductsController().handle)
routes.delete("/products/:id", new DeleteProductController().handle)
routes.put("/products/:id", new UpdateProductController().handle)

export { routes }
