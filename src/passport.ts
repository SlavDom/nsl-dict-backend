import * as passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import {User} from "./models/User";
import {Strategy as JWTStrategy, ExtractJwt} from "passport-jwt";
import * as bcrypt from "bcrypt";

passport.use('local', new LocalStrategy({
    session: false,
  },
  function (username: string, password: string, cb: any) {
    return User.findOne({where: {username}})
      .then(user => {
        if (!user) {
          return cb(null, false, {message: 'Incorrect username'});
        }
        return bcrypt.compare(password, user.password, (e, res) => {
          if (res) {
            return cb(null, user, {message: 'Logged in successfully '});
          } else {
            return cb(null, false, {message: 'Incorrect password'});
          }
        });
      })
      .catch(err => cb(err));
  }));

passport.use('jwt', new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
  secretOrKey: '1234567890',
}, function (jwtPayload: any, cb: (err: string, user?: any) => any) {
  return User.findOne({ where: { id: jwtPayload.id } })
    .then(user => cb(null, user))
    .catch((err: string) => cb(err))
}));

passport.serializeUser(function (user: User, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id: number, done) {
  User.findById(id).then(user => done(null, user)).catch(err => done(err));
});