'use strict';

(function () {

  if (document.querySelector('.options')) {
    var movies = document.querySelector('.movies');
    movies.addEventListener('click', getMovies, false);
  }
  if (document.querySelector('#movies')) {
    var coverMovie = document.querySelectorAll('.movie-cover');
    coverMovie.forEach(function (movie) {
      movie.addEventListener('click', getSingle, false);
    });
    getGenre.call();
  }

  function getMovies() {
    var url = '/movies';

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      console.log(data);
      // let container = document.querySelector('#movies');
      // while(container.firstChild) {
      //      container.removeChild(container.firstChild);
      //    }
      //    data.movie.forEach((movie) => {
      //      let newInfo = `<div id="${movie.movies_id}" class="movie-cover">
      //          <h4>${movie.movies_title}</h4>
      //          <img src="images/${movie.movies_cover}" alt="${movie.movies_title}">
      //        </div>`;
      //      container.innerHTML += newInfo;
      //    });
    }).catch(function (error) {
      console.log(error);
    });
  }

  function getSingle(e) {
    var single = e.currentTarget.id;
    var url = 'movies/' + single;

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      openSingle(data);
    }).catch(function (error) {
      console.log(error);
    });
  }

  function openSingle(data) {
    var movieData = data.movie[0];
    // let container = document.querySelector('body');
    var container = document.body;
    var lightbox = document.querySelector('.lightbox');
    var light = '<div id="light-wrapper">\n      <div class="light">\n        <div><img src="images/' + movieData.movies_cover + '"></div>\n        <div class="movie-info">\n          <h2>' + movieData.movies_title + '</h2>\n          <h4>' + movieData.movies_year + '</h4>\n          <p>' + movieData.movies_storyline + '</p>\n        </div>\n        <i class="ion-ios-close-outline"></i>\n      </div>\n      <figure class="video"><video controls src="videos/' + movieData.movies_trailer + '"></video></figure>\n    </div>';
    lightbox.style.display = "block";
    container.classList.add('no-scroll');
    lightbox.innerHTML = light;
    var closeBtn = document.querySelector('.ion-ios-close-outline');
    closeBtn.addEventListener('click', closeBox, false);

    function closeBox() {
      lightbox.style.display = "none";
      container.classList.remove('no-scroll');
    }
  }

  function getGenre() {
    // console.log('from getMyths');
    var url = 'movies/genre';

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      // console.log(data);
      var select = document.querySelector('.select');
      data.genre.forEach(function (item) {
        var option = '<option value="' + item.genre_id + '">' + item.genre_name + '</option>';
        select.innerHTML += option;
      });
      select.addEventListener('change', filterMovies, false);
    }).catch(function (error) {
      console.log(error);
    });
  }

  function filterMovies(e) {
    var select = document.querySelector('.select');
    var value = select.value;
    var url = 'movies/genre/' + value;
    console.log(value);
    //
    // if(value == 0){
    //   getMovies.call();
    //   return;
    // } else {
    // url = 'movies/genre/'+value;
    // }
    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      console.log(data);
      var container = document.querySelector('#movies');
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      data.movie.forEach(function (movie) {
        var newInfo = '<div id="' + movie.movies_id + '" class="movie-cover">\n                   <h4>' + movie.movies_title + '</h4>\n                   <img src="images/' + movie.movies_cover + '" alt="' + movie.movies_title + '">\n                 </div>';
        container.innerHTML += newInfo;
      });
      var coverMovie = document.querySelectorAll('.movie-cover');
      coverMovie.forEach(function (movie) {
        movie.addEventListener('click', getSingle, false);
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
})();
