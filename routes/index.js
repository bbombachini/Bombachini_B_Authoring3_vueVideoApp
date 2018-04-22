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

router.get('/movies', videoController.get_all_movies);
router.get('/movies/:id', videoController.get_single_movie);
router.get('/genres', videoController.get_all_genres);
router.post('/api', videoController.post_review);

module.exports = router;
