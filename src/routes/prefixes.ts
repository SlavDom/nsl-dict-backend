import {Prefix} from "../models/Prefix";
import authenticated from "../middlewares/authenticated";
import {Router} from "express";
import * as passport from "passport";
import isAdmin from "../middlewares/isAdmin";

export default function (router: Router) {
  router.route('/prefixes')
    .get(function(req, res, next) {
      Prefix.findAll().then(result => {
        res.status(200).send(result);
      });
    })
    .post(authenticated, isAdmin, function (req, res, next) {
      const data = req.body;
      if (Object.keys(data).length > 0) {
        Prefix.insertOrUpdate(req.body).then(() => {
          res.sendStatus(202);
        });
      } else {
        res.sendStatus(400);
      }
    });
}