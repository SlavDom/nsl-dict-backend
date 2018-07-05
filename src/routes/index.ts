import {Router} from 'express';
import nests from "./nests";
import parts from './parts';
import words from "./words";
import suffixes from "./suffixes";
import prefixes from "./prefixes";
import auth from "./auth";

const router: Router = Router();

router.route('/')
  .get(function(req, res, next) {
    res.sendStatus(200);
  });

auth(router);
nests(router);
parts(router);
words(router);
suffixes(router);
prefixes(router);

export default router;
