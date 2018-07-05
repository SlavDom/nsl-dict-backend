import {Suffix} from "../models/Suffix";
import authenticated from "../middlewares/authenticated";
import isAdmin from "../middlewares/isAdmin";

export default function (router) {
  router.route('/suffixes')
    .get(function(req, res, next) {
      Suffix.findAll().then(result => {
        res.status(200).send(result);
      });
    })
    .post(authenticated, isAdmin, function (req, res) {
      Suffix.insertOrUpdate(req.body).then(() => {
        res.sendStatus(202);
      });
    });
}