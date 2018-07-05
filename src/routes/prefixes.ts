import {Prefix} from "../models/Prefix";
import authenticated from "../middlewares/authenticated";
import {Router} from "express";

export default function (router: Router) {
  router.route('/prefixes')
    .get(function(req, res, next) {
      Prefix.findAll().then(result => {
        res.status(200).send(result);
      });
    })
    .post(authenticated, function (req, res, next) {
      Prefix.insertOrUpdate(req.body).then(() => {
        res.sendStatus(202);
      });
    });
}