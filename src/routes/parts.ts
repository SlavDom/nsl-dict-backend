import { Part } from "../models/Part";
import {Response} from "express";
import authenticated from "../middlewares/authenticated";
import isAdmin from "../middlewares/isAdmin";

export default function (router) {
  router.route('/parts')
    .get(function(req, res: Response, next) {
        Part.findAll().then(result => {
          res.status(200).send(result);
        });
      })
    .post(authenticated, isAdmin, function (req, res) {
        Part.insertOrUpdate(req.body).then(() => {
          res.sendStatus(202);
        });
    });
}