import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { engine } from "express-handlebars";
import router from "./src/routers/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.mid.js";
import pathHandler from "./src/middlewares/pathHandler.mid.js";
import dbConnect from "./src/utils/dbConnect.util.js";
import __dirname from "./utils.js"

/* server */
const server = express();
const port = 8080;
const ready = async () => {
  console.log("server is ready on port " + port);
  await dbConnect();
  console.log("mongo connected");
};
server.listen(port, ready);

/* template engine */
server.engine("handlebars",engine())
server.set('view engine', 'handlebars')
server.set('views', __dirname+'/src/views')

/* middlewares */
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(cookieParser(process.env.COOKIE_KEY));
server.use("/", router);
server.use(errorHandler);
server.use(pathHandler);
