import {Router} from 'express';
import nests from "./nests";
import parts from './parts';

const router: Router = Router();

router.route('/')
  .get(function(req, res, next) {
    res.sendStatus(200);
  });

nests(router);
parts(router);

export default router;
