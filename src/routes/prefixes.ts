import {Prefix} from "../models/Prefix";

export default function (router) {
  router.route('/prefixes')
    .get(function(req, res, next) {
      Prefix.findAll().then(result => {
        res.status(200).send(result);
      });
    })
    .post(function (req, res) {
      Prefix.insertOrUpdate(req.body).then(() => {
        res.sendStatus(202);
      });
    });
}