import * as createError from 'http-errors';
import * as express from 'express';
import * as logger from 'morgan';

import indexRouter from './routes/index';
import {Express} from "express";
import connect from "./db/connect";

import * as passport from "passport";
import session = require("express-session");

const app: Express = express();
import './passport';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: '1234567890',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

connect();

export default app;
