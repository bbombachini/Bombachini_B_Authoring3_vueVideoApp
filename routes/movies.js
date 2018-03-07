var express = require('express');
var router = express.Router();
var config = require('../config');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');

/* GET kids page. */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  connect.query(`SELECT * FROM tbl_movies`, (err, result) => {
    if(err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.render('movies', {
        title: 'Movies | Roku Entertainment Partner',
        movies : result
      });
    }
  });
});

module.exports = router;
