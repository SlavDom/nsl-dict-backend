import * as passport from "passport";

export default function (req, res, next) {
  // req.isAuthenticated() ? next() : res.sendStatus(401);
  return passport.authenticate('jwt', {session: false})(req, res, next);
}

