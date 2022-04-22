import { Router } from "express"
import { CreateProductController } from "./controllers/CreateProductController"
import { DeleteProductController } from "./controllers/DeleteCategoryController"
import { GetAllProductsController } from "./controllers/GetAllProductsController"
import { UpdateProductController } from "./controllers/UpdateProductController"

const routes = Router()

routes.post("/products", new CreateProductController().handle)
routes.get("/products", new GetAllProductsController().handle)
routes.delete("/products/:id", new DeleteProductController().handle)
routes.put("/products/:id", new UpdateProductController().handle)

export { routes }
