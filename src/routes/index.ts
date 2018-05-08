import {Router} from 'express';
import {LexicalNest} from "../models/LexicalNest";
import {Tag} from "../models/Tag";

const router: Router = Router();

router.route('/')
  .get(function(req, res, next) {
    res.sendStatus(200);
  });

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
  });

export default router;
