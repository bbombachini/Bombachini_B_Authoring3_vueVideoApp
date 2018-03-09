'use strict';

(function () {

  if (document.querySelector('.options')) {
    var movies = document.querySelector('.movies');
    movies.addEventListener('click', getMovies, false);
  }
  if (document.querySelector('#movies')) {
    var coverMovie = document.querySelectorAll('.cover');
    coverMovie.forEach(function (movie) {
      movie.addEventListener('click', getSingle, false);
    });
    getGenre.call();
  }

  if (document.querySelector('#music')) {
    var artist = document.querySelectorAll('.cover');
    artist.forEach(function (photo) {
      photo.addEventListener('click', getAlbum, false);
    });
  }

  function getAlbum(e) {
    var album = e.currentTarget.id;
    var url = 'music/' + album;

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      openAlbum(data);
      // console.log(data);
    }).catch(function (error) {
      console.log(error);
    });
  }

  function getMovies() {
    var url = '/movies';

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      // console.log(data);
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
    var container = document.body;
    var lightbox = document.querySelector('.lightbox');
    var light = '<div id="light-wrapper">\n      <div class="light">\n        <div><img src="images/' + movieData.movies_cover + '"></div>\n        <div class="movie-info">\n          <h2>' + movieData.movies_title + '<span>(' + movieData.movies_year + ')</span></h2><h4><i class="ion-android-star"></i>' + movieData.movies_rating + '</4>\n          <span>' + movieData.genre_name + '</span>\n          <p>' + movieData.movies_storyline + '</p>\n          <div class="social-media"><i class="ion-social-facebook"></i><i class="ion-social-instagram"></i><i class="ion-social-twitter"></i></div>\n        </div>\n        <i class="ion-ios-close-outline"></i>\n      </div>\n      <figure class="video"><video controls src="videos/' + movieData.movies_trailer + '"></video></figure>\n    </div>';
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

  function openAlbum(data) {
    var music = data.albums;
    // console.log(music);
    var container = document.body;
    var lightbox = document.querySelector('.lightbox');
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    var box = '<div id="box-wrapper">\n      <div class="box">\n        <div><img src="images/' + music[0].artist_photo + '"></div>\n        <h2>' + music[0].artist_name + '</h2>\n        <i class="ion-ios-close-outline"></i>\n      </div>\n      <div class="tracklist">\n        <div class="album-info">\n            <img src="images/' + music[0].albums_cover + '">\n            <div><h2>' + music[0].albums_name + '</h2>\n            <h4>' + music[0].albums_year + '</h4></div>\n        </div>\n      </div>\n    </div>';
    lightbox.innerHTML += box;
    var tracklist = document.querySelector('.tracklist');
    music.forEach(function (item) {
      var track = '<div class="track"><p><span>' + item.musics_position + '. </span>' + item.musics_name + '</p><div>\n      <div><audio controls><source src="musics/' + item.musics_file + '" type="audio/mpeg"></audio></div>';
      tracklist.innerHTML += track;
    });
    lightbox.style.display = "block";
    container.classList.add('no-scroll');

    var closeBtn = document.querySelector('.ion-ios-close-outline');
    closeBtn.addEventListener('click', closeBox, false);

    function closeBox() {
      lightbox.style.display = "none";
      container.classList.remove('no-scroll');
    }
  }

  function getGenre() {
    var url = 'movies/genre';

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
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

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      // console.log(data);
      var container = document.querySelector('#movies');
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      data.movie.forEach(function (movie) {
        var newInfo = '<div id="' + movie.movies_id + '" class="cover">\n                   <h4>' + movie.movies_title + '</h4>\n                   <img src="images/' + movie.movies_cover + '" alt="' + movie.movies_title + '">\n                 </div>';
        container.innerHTML += newInfo;
      });
      var coverMovie = document.querySelectorAll('.cover');
      coverMovie.forEach(function (movie) {
        movie.addEventListener('click', getSingle, false);
      });
    }).catch(function (error) {
      console.log(error);
    });
  }
})();
