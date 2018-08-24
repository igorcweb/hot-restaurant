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
      res.redirect('/tables');
    } else {
      console.log('error: ', err.message);
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
      res.redirect('/tables');
    } else {
      console.log('error: ', err.message);
    }
  });
});

module.exports = router;
