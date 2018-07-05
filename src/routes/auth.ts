import * as passport from "passport";
import * as jwt from 'jsonwebtoken';
import {Router} from "express";
import {User} from "../models/User";
import * as bcrypt from 'bcrypt';

export default function (router: Router) {
  router.route('/auth/login').post(function (req, res) {
    passport.authenticate('local', (err, userResponse, info) => {
      const user = userResponse.dataValues;
      if (err || !user) {
        return res.status(400).json({
          message: 'Bad request',
          user,
        });
      }
      req.logIn(user, {session: false}, err => {
        if (err) {
          res.send(err);
        }
      });
      const token = jwt.sign(user, '1234567890');
      return res.json({user, token});
    })(req, res);
    });

  router.route('/auth/register')
    .post(function (req, res) {
      return bcrypt.hash(req.body.password, 10, (e, data) => {
        return User
          .create({ username: req.body.username, password: data })
          .then(a => res.sendStatus(201))
          .catch(e => res.sendStatus(400));
      });
    });
}