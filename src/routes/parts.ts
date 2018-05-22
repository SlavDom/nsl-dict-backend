import { Part } from "../models/Part";
import {Response} from "express";

export default function (router) {
  router.route('/parts')
    .get(function(req, res: Response, next) {
        Part.findAll().then(result => {
          res.status(200).send(result);
        });
      })
    .post(function (req, res) {
        Part.insertOrUpdate(req.body).then(() => {
          res.sendStatus(202);
        });
    });
}