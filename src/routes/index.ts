import {Router} from 'express';

const router: Router = Router();

router.route('/')
  .get(function(req, res, next) {
    res.sendStatus(200);
  });

export default router;
