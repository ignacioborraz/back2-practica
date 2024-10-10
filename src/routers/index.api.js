import { Router } from "express";
import productsRouter from "./api/products.api.js";
import usersRouter from "./api/users.api.js";
import cartsRouter from "./api/carts.api.js";

const indexRouter = Router()

indexRouter.use("/products", productsRouter)
indexRouter.use("/users", usersRouter)
indexRouter.use("/carts", cartsRouter)

export default indexRouter