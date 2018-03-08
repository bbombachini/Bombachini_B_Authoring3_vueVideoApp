var express = require('express');
var router = express.Router();
var config = require('../config');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');

//Middleware
var renderPage = (config.kids) ? 'movies_kids' : 'movies';

/* GET kids page. */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  connect.query(`SELECT * FROM tbl_movies`, (err, result) => {
    if(err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.render(renderPage , {
        title: 'Movies | Roku Entertainment Partner',
        movies : result
      });
    }
  });
});

router.get('/genre', (req, res) => {
  let getGenre = `SELECT * FROM tbl_genre`;
  connect.query(getGenre, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      // console.log(result);
      //return result as json
      res.json({
        genre: result
      });
    }
  });
});

router.get('/genre/:id', (req, res) => {
  if (req.params.id == 0) {
    console.log(req.params.id);
    connect.query(`SELECT * FROM tbl_movies`, (err, result) => {
      if(err) {

        throw err; console.log("[mysql error]", err);
      } else {
        console.log(result);
        res.json({
          movie : result
        });
      }
    });
  } else {
  let filterGenre = `SELECT * FROM tbl_genre g, tbl_movies m, tbl_mov_gen mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id AND g.genre_id= ${req.params.id}`;

  connect.query(filterGenre, (err, result) => {
    if(err) {
      throw err;
      console.log(err);
    }
    else {
      res.json({
        movie : result
      });
    }
  });
}
});

router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  connect.query(`SELECT * FROM tbl_movies WHERE movies_id="${req.params.id}"`, (err, result) => {
    if(err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.json({
        movie : result
      });
    }
  });
});

module.exports = router;
