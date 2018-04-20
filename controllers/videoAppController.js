//handle the routing requests => the request gets passed in via the route
const connect = require('../utils/sqlConnect');

//Middleware
var renderPage = (connect.kids) ? 'movies_kids' : 'movies';

exports.get_all_movies = (req, res) => {
  connect.getConnection((err, connection) => {
    connection.release();
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
      if(err){
        return console.log(err.message);
      } else {
        console.log(result);
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

// connect.getConnection((err, connection) => {
//   if(err) {
//     return console.log(err.message);
//   }
//   let query = `SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_genre mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id;`;
//   connect.query(query, (err, rows) => {
//
//      //let somebody else use this connection
//     if(err) {
//       return console.log(err.message);
//     }
//     // console.log(rows);
//     res.render('home', {
//       defaultMovie : rows[Math.floor(Math.random() * rows.length)],
//       data: JSON.stringify(rows),
//       mainpage: true,
//       moviepage: false
//     });
//   })
// })

// exports.get_one_movie = (req, res) => {
//   console.log(req.params.id, req.params.movie);
//   connect.getConnection((err, connection) => {
//     if(err) {
//       return console.log(err.message);
//     }
//     let movieQuery = `SELECT * FROM tbl_comments WHERE comments_movie = "${req.params.id}";`;
//     connect.query(movieQuery, (err, rows) => {
//       connection.release(); //let somebody else use this connection
//       if(err) {
//         return console.log(err.message);
//       }
//       res.render('moviepage', {
//         movie:req.params.id,
//         moviesrc: req.params.movie,
//         data: JSON.stringify(rows),
//         mainpage: false,
//         moviepage: true
//       });
//     })
//   })
// };
//
// exports.post_one_comment = (req, res) => {
//   console.log('hit post comment');
//   connect.getConnection((err, connection) => {
//     if(err) {
//       return console.log(err.message);
//     }
//     let insertQuery = `INSERT INTO tbl_comments (comments_id, comments_auth, comments_copy, comments_date, comments_movie, comments_rating) VALUES (NULL, NULL, "${req.body.comment}", CURRENT_TIMESTAMP(), "${req.body.id}", "${req.body.stars}");`;
//
//     connect.query(insertQuery, (err, rows) => {
//       if(err) {
//         return console.log(err.message);
//       }
//       console.log(rows);
//       res.json(rows);
//     })
//   })
// };
