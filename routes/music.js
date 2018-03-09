var express = require('express');
var router = express.Router();
var config = require('../config');
var connect = require('../utils/sqlConnect');
var bodyParser = require('body-parser');

//Middleware
var renderPage = (config.kids) ? 'music_kids' : 'music';

/* GET kids page. */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  if(config.kids){
    // For kids, select all that match pop music only
    var getMusic = `SELECT * FROM tbl_artist a, tbl_albums al, tbl_musics m, tbl_art_mgen am, tbl_mgenre mg WHERE a.artist_id = al.artist_id AND m.albums_id = al.albums_id AND am.artist_id = a.artist_id AND mg.mus_gen_id = "3";`;
  } else {
    var getMusic = `SELECT * FROM tbl_artist`;
  }
  connect.query(getMusic, (err, result) => {
    if(err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.render(renderPage , {
        title: 'Music | Roku Entertainment Partner',
        kids: config.kids,
        music : result
      });
    }
  });
});

router.get('/:id', function(req, res, next) {
  console.log(req.params.id);
  connect.query(`SELECT * FROM tbl_artist a, tbl_albums al, tbl_musics m WHERE a.artist_id = al.artist_id AND m.albums_id = al.albums_id AND a.artist_id="${req.params.id}";`, (err, result) => {
    if(err) {
      throw err; console.log(err);
    } else {
      console.log(result);
      res.json({
        albums : result
      });
    }
  });
});


module.exports = router;
