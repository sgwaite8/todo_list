var express = require('express');
var router = express.Router();
var todolist = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'To Do List' });
});

router.get('/', function(req, res, next) {
  res.render(todolist);
});

module.exports = router;
