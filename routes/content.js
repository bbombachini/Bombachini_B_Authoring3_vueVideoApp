var express = require('express');
var router = express.Router();
var config = require('../config');
var bodyParser = require('body-parser');

//Personalize message
var message = (config.kids) ? 'Kids' : 'Adults';
var title = (config.kids) ? 'Kids Mode | Roku Entertainment Partner' : 'Adults Mode | Roku Entertainment Partner';
/* GET kids page. */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('content', {
    title: title,
    kids: config.kids,
    msg: message
  });
});

module.exports = router;
