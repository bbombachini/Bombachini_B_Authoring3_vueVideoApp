var express = require('express');
var router = express.Router();
var config = require('../config');
var videoController = require('../controllers/videoAppController');
var bodyParser = require('body-parser');
var mainpage;
var moviepage;

/* GET home page. */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('home', { title: 'FlashBack | Roku Entertainment Partner' });
});

router.get('/movies', videoController.get_all_movies );
router.get('/genres', videoController.get_all_genres);

module.exports = router;




//MOVIES Route
// router.get('/', function(req, res, next) {
  // if(config.kids){
  //   //For kids, select all that match the properly age rating
  //   var getMovies = `SELECT * FROM tbl_movies m, tbl_age_rating ar, tbl_mov_ara ma WHERE m.movies_id = ma.movies_id AND ar.arating_id = ma.arating_id AND (ar.arating_id="1" OR ar.arating_id="2" OR ar.arating_id="3")`;
  // } else {
  //   var getMovies = `SELECT * FROM tbl_movies`;
  // }
  // connect.query(getMovies, (err, result) => {
  //   if(err) {
  //     throw err; console.log(err);
  //   } else {
  //     console.log(result);
  //     res.render(renderPage , {
  //       title: 'Movies | Roku Entertainment Partner',
  //       kids: config.kids,
  //       movies : result
  //     });
  //   }
  // });
// });

// router.get('/genre', (req, res) => {
//   if(config.kids){
//     //Remove the genres crime and horror from kids view
//     var getGenre = `SELECT * FROM tbl_genre WHERE NOT (genre_id="4" OR genre_id="7")`;
//   } else {
//     var getGenre = `SELECT * FROM tbl_genre`;
//   }
//   connect.query(getGenre, (err, result) => {
//     if(err) {
//       throw err;
//       console.log(err);
//     }
//     else {
//       res.json({
//         genre: result
//       });
//     }
//   });
// });

// router.get('/genre/:id', (req, res) => {
//   if (req.params.id == 0) {
//     // console.log(req.params.id);
//       if(config.kids) {
//         var filterGenre = `SELECT * FROM tbl_movies m, tbl_age_rating ar, tbl_mov_ara ma WHERE m.movies_id = ma.movies_id AND ar.arating_id = ma.arating_id AND (ar.arating_id="1" OR ar.arating_id="2" OR ar.arating_id="3")`;
//       } else {
//         var filterGenre = `SELECT * FROM tbl_movies`;
//       }
//   } else {
//       if(config.kids){
//         var filterGenre = `SELECT * FROM tbl_genre g, tbl_movies m, tbl_mov_gen mg, tbl_age_rating ar, tbl_mov_ara ma WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id AND m.movies_id = ma.movies_id AND ar.arating_id = ma.arating_id AND (ar.arating_id="1" OR ar.arating_id="2" OR ar.arating_id="3") AND g.genre_id= ${req.params.id}`;
//       } else {
//         var filterGenre = `SELECT * FROM tbl_genre g, tbl_movies m, tbl_mov_gen mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id AND g.genre_id= ${req.params.id}`;
//     }
//   }
//   connect.query(filterGenre, (err, result) => {
//     if(err) {
//       throw err;
//       console.log(err);
//     }
//     else {
//       res.json({
//         movie : result
//       });
//     }
//   });
//
// });
//
// router.get('/:id', function(req, res, next) {
//   console.log(req.params.id);
//   connect.query(`SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_gen mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id AND m.movies_id = mg.movies_id AND m.movies_id="${req.params.id}"`, (err, result) => {
//     if(err) {
//       throw err; console.log(err);
//     } else {
//       console.log(result);
//       res.json({
//         movie : result
//       });
//     }
//   });
// });
