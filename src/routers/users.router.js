import { Router } from "express";
/* import passport from "passport"; */
/* TENGO QUE IMPORTAR EL MIDDLEWARE MODIFICADO!!! NO EL BASE QUE INSTALAMOS!!! */
import passport from "../middlewares/passport.mid.js";

const usersRouter = Router();

const register = (req, res, next) => {
  try {
    const user = req.user;
    res.status(201).json({ message: "Registered", _id: user._id });
  } catch (error) {
    next(error);
  }
};

usersRouter.post(
  "/register",
  passport.authenticate("register", { session: false }),
  register
);

export default usersRouter;
