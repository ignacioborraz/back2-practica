import { Router } from "express";
import { create, readAll, readById, updateById, deleteById } from "../../controllers/users.controller.js";

const usersRouter = Router()

usersRouter.post("/", create)

usersRouter.get("/", readAll)

usersRouter.get("/:uid", readById)

usersRouter.put("/:uid", updateById)

usersRouter.delete("/:uid", deleteById)

export default usersRouter