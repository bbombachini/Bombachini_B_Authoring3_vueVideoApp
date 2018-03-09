var express = require('express');
var router = express.Router();
var config = require('../config');
var bodyParser = require('body-parser');

/* GET kids page. */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('admin', { title: 'Admin | Roku Entertainment Partner' });
});

module.exports = router;
