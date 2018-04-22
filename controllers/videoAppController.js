//handle the routing requests => the request gets passed in via the route
const connect = require('../utils/sqlConnect');

//Middleware
var renderPage = (connect.kids) ? 'movies_kids' : 'movies';

exports.get_all_movies = (req, res) => {
  connect.getConnection((err, connection) => {
    if(err) {
      return console.log(err.message);
    }
    if(connect.kids){
      //For kids, select all that match the properly age rating
      var getMovies = `SELECT * FROM tbl_movies m, tbl_age_rating ar, tbl_mov_ara ma WHERE m.movies_id = ma.movies_id AND ar.arating_id = ma.arating_id AND (ar.arating_id="1" OR ar.arating_id="2" OR ar.arating_id="3")`;
    } else {
      var getMovies = `SELECT * FROM tbl_movies`;
    }
    connect.query(getMovies, (err, result) => {
      connection.release();
      if(err){
        return console.log(err.message);
      } else {
        // console.log(result);
        res.render(renderPage , {
          title: 'Movies | Roku Entertainment Partner',
          kids: connect.kids,
          movies : JSON.stringify(result),
          mainpage: true,
          moviepage: false
        });
      }
    });
  });
};

exports.get_all_genres = (req, res) => {
  connect.getConnection((err, connection) => {
    if(err) {
      return console.log(err.message);
    }
    if(connect.kids){
       //Remove the genres crime and horror from kids view
       var getGenre = `SELECT * FROM tbl_genre WHERE NOT (genre_id="4" OR genre_id="7")`;
     } else {
       var getGenre = `SELECT * FROM tbl_genre`;
     }
    connect.query(getGenre, (err, result) => {
      connection.release();
      if(err){
        return console.log(err.message);
      } else {
        // console.log(result);
        res.json({
          genres: result
        });
      }
    });
  });
};

exports.get_single_movie = (req, res) => {
  console.log(req.params.id, req.params.movie);
  connect.getConnection((err, connection) => {
    if(err) {
      return console.log(err.message);
    }
    let movieQuery = `SELECT * FROM tbl_movies WHERE movies_id = "${req.params.id}";`;
    connect.query(movieQuery, (err, rows) => {
      if(err) {
        return console.log(err.message);
      }
      let commentQuery = `SELECT * FROM tbl_comments WHERE movies_id = "${req.params.id}";`;
      connect.query(commentQuery, (err, result) => {
        if(err) {
          return console.log(err.message);
        } else {
          res.render('moviepage', {
            movie:req.params.id,
            // moviesrc: req.params.movie,
            movies: JSON.stringify(rows),
            mainpage: false,
            moviepage: true,
            comments: JSON.stringify(result)
          });
        }
      })
    })
  })
};

exports.post_review = (req, res) => {
  console.log('hit post comment');
  connect.getConnection((err, connection) => {
    if(err) {
      return console.log(err.message);
    }
    let insertQuery = `INSERT INTO tbl_comments (comments_id, comments_copy, comments_date, movies_id, comments_rating) VALUES (NULL, "${req.body.comment}", CURRENT_TIMESTAMP(), "${req.body.id}", "${req.body.stars}");`;
    connect.query(insertQuery, (err, rows) => {
      if(err) {
        return console.log(err.message);
      }
      console.log(rows);
      res.json(rows);
    })
  })
};
