const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const sessionConfig = require('./session');

module.exports = function config(app) {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(session(sessionConfig));
};