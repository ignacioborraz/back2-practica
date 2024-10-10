import "dotenv/config.js"
import express from "express"
import dbConnect from "./src/utils/db.util.js"
import morgan from "morgan"
import errorHandler from "./src/middlewares/errorHandler.mid.js"
import pathHandler from "./src/middlewares/pathHandler.mid.js"
import indexRouter from "./src/routers/index.api.js"

// server
const server = express()
const port = process.env.PORT || 8000
const ready = () => {
    // informar que el servidor está levantado
    console.log("server ready on port " + port);
    // conectar con mongo
    dbConnect()
}
server.listen(port, ready)

// middlewares
server.use(morgan("dev"))
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

// routers
server.use("/api", indexRouter)
server.use(errorHandler)
server.use(pathHandler)