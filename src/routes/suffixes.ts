import {Suffix} from "../models/Suffix";

export default function (router) {
  router.route('/suffixes')
    .get(function(req, res, next) {
      Suffix.findAll().then(result => {
        res.status(200).send(result);
      });
    })
    .post(function (req, res) {
      Suffix.insertOrUpdate(req.body).then(() => {
        res.sendStatus(202);
      });
    });
}