import { Part } from "../models/Part";

export default function (router) {
  router.route('/parts')
    .get(function(req, res, next) {
        Part.findAll().then(result => {
          res.send(result);
        });
      });
}