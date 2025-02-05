import { Router } from "express";

const viewsRouter = Router();

const registerView = (req, res, next) => {
  try {
    res.status(200).render("register")
  } catch (error) {
    next(error);
  }
};
const loginView = (req, res, next) => {
  try {
    res.status(200).render("login")
  } catch (error) {
    next(error);
  }
};
const profileView = (req, res, next) => {
  try {
    res.status(200).render("profile")
  } catch (error) {
    next(error);
  }
};

viewsRouter.get("/register", registerView);
viewsRouter.get("/login", loginView);
viewsRouter.get("/me", profileView);

export default viewsRouter;
