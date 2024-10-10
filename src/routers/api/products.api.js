// MANU

import { Router } from "express";
import { create, readAll, readById, updateById, deleteById } from "../../controllers/products.controller.js";
const productsRouter = Router()

productsRouter.post("/", create)

productsRouter.get("/", readAll)

productsRouter.get("/:pid", readById)

productsRouter.put("/:pid", updateById)

productsRouter.delete("/:pid", deleteById)

export default productsRouter