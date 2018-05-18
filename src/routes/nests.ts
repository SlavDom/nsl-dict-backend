import { Tag } from "../models/Tag";
import { LexicalNest } from "../models/LexicalNest";

export default function (router) {
  router.route('/nests')
    .get(function(req, res, next) {
      const criterion = req.query.criterion;
      const tag = new Tag({name: 'bob', description: 'asdasd'});
      tag.save();
      let nests = [];
      if (criterion) {
        LexicalNest.findAll({
          where: {
            name: criterion,
          },
        }).then(result => {
          nests = result;
        });
      } else {
        LexicalNest.findAll().then(result => {
          nests = result;
          res.send(nests);
        });
      }
    })
    .post(function (req, res, next) {
      const newNest: string = req.body;
      LexicalNest.insertOrUpdate(newNest).then(() => {
        res.sendStatus(202);
      });
    });
}