var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
  res.render('index');
});
router.get('/tables', function(req, res) {
  res.render('tables');
});
router.get('/reserve', function(req, res) {
  res.render('reserve', { error: req.flash('error') });
});

module.exports = router;
