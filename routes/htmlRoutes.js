var express = require('express');
var router = express.Router();
var path = require('path');
var data = require('../data/data');
var friends = data.friends;
var connection = data.connection;

module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

/* GET survey page. */
router.get('/survey', function(req, res, next) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

