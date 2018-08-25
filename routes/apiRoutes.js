var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Joi = require('joi');
var schema = require('../joiSchema');

var tables = [];
var wait = [];

router.get('/tables', function(req, res) {
  res.json(tables);
});

router.get('/wait', function(req, res) {
  res.json(wait);
});

router.post('/tables', function(req, res) {
  Joi.validate(req.body, schema, function(err) {
    if (!err) {
      var newCustomer = req.body;
      newCustomer.id = Math.floor(Math.random() * 89999999999) + 10000000000;
      tables.push(newCustomer);
      req.flash('success', 'Your table is reserved!');
      res.redirect('/reserve');
    } else {
      req.flash('error', err.message);
      res.redirect('/reserve');
    }
  });
});

router.post('/wait', function(req, res) {
  Joi.validate(req.body, schema, function(err) {
    if (!err) {
      var newCustomer = req.body;
      newCustomer.id = Math.floor(Math.random() * 89999999999) + 10000000000;
      wait.push(newCustomer);
      req.flash('wait', 'You have been placed on a waiting list.');
      res.redirect('/reserve');
    } else {
      req.flash('error', err.message);
      res.redirect('/reserve');
    }
  });
});

module.exports = router;
