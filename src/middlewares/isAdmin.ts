import {ROLES} from "../lib/enum";

export default function (req, res, next) {
  if (req.user.dataValues.role === ROLES.ADMIN) {
    next();
  } else {
    res.sendStatus(403);
  }
}
