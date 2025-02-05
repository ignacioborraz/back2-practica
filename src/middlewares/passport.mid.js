import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../data/users.model.js";
import { createHash } from "../utils/hash.util.js";

passport.use(
  "register",
  new LocalStrategy(
    /* objeto con las configuraciones de la estrategia */
    { usernameField: "email", passReqToCallback: true },
    /* función con la lógica del registro */
    async (req, email, password, done) => {
      try {
        /* 1. buscar al usuario para impedir su re-registro */
        const one = await User.findOne({ email });
        if (one) {
          const error = new Error("Bad Auth");
          error.statusCode = 401;
          throw error;
        }
        /* 2. hashear la contraseña */
        const hashPassword = createHash(password);
        req.body.password = hashPassword;
        /* 3. crear al usuario */
        const user = await User.create(req.body);
        /* 4. dejar pasar agregando al objeto de requerimientos los datos del usuario creado */
        done(null, user);
      } catch (error) {
        done(error);
      }
    }
  )
);
//passport.use("login", new LocalStrategy());

export default passport;
