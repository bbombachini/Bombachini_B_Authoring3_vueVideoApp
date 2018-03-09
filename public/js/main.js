(() => {

  if(document.querySelector('.options')){
    let movies = document.querySelector('.movies');
    movies.addEventListener('click', getMovies, false);
  }
  if(document.querySelector('#movies')){
    let coverMovie = document.querySelectorAll('.cover');
    coverMovie.forEach((movie) => {
      movie.addEventListener('click', getSingle, false);
    });
    getGenre.call();
  }

  if(document.querySelector('#music')){
    let artist = document.querySelectorAll('.cover');
    artist.forEach((photo) => {
      photo.addEventListener('click', getAlbum, false);
    });
  }

  function getAlbum(e){
    let album = e.currentTarget.id;
    let url = 'music/' + album;

    fetch(url)
      .then((resp) => resp.json())
        .then((data) =>{
          openAlbum(data);
          // console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  function getMovies(){
    let url = '/movies';

    fetch(url)
      .then((resp) => resp.json())
        .then((data) =>{
          console.log(data);
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  function getSingle(e){
    let single = e.currentTarget.id;
    let url = 'movies/' + single;

    fetch(url)
      .then((resp) => resp.json())
        .then((data) =>{
          openSingle(data);
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  function openSingle(data){
    let movieData = data.movie[0];
    let container = document.body;
    let lightbox = document.querySelector('.lightbox');
    let light = `<div id="light-wrapper">
      <div class="light">
        <div><img src="images/${movieData.movies_cover}"></div>
        <div class="movie-info">
          <h2>${movieData.movies_title}<span>(${movieData.movies_year})</span></h2><h4><i class="ion-android-star"></i>${movieData.movies_rating}</4>
          <span>${movieData.genre_name}</span>
          <p>${movieData.movies_storyline}</p>
          <div class="social-media"><i class="ion-social-facebook"></i><i class="ion-social-instagram"></i><i class="ion-social-twitter"></i></div>
        </div>
        <i class="ion-ios-close-outline"></i>
      </div>
      <figure class="video"><video controls src="videos/${movieData.movies_trailer}"></video></figure>
    </div>`;
    lightbox.style.display = "block";
    container.classList.add('no-scroll');
    lightbox.innerHTML = light;
    let closeBtn = document.querySelector('.ion-ios-close-outline');
    closeBtn.addEventListener('click', closeBox, false);

    function closeBox() {
      lightbox.style.display = "none";
      container.classList.remove('no-scroll');
    }
  }

  function openAlbum(data){
    let music = data.albums;
    // console.log(music);
    let container = document.body;
    let lightbox = document.querySelector('.lightbox');
    while(lightbox.firstChild) {
         lightbox.removeChild(lightbox.firstChild);
       }
    let box = `<div id="box-wrapper">
      <div class="box">
        <div><img src="images/${music[0].artist_photo}"></div>
        <h2>${music[0].artist_name}</h2>
        <i class="ion-ios-close-outline"></i>
      </div>
      <div class="tracklist">
        <div class="album-info">
            <img src="images/${music[0].albums_cover}">
            <div><h2>${music[0].albums_name}</h2>
            <h4>${music[0].albums_year}</h4></div>
        </div>
      </div>
    </div>`;
    lightbox.innerHTML += box;
    var tracklist = document.querySelector('.tracklist');
    music.forEach((item) =>{
      let track = `<div class="track"><p><span>${item.musics_position}. </span>${item.musics_name}</p><div>
      <div><audio controls><source src="musics/${item.musics_file}" type="audio/mpeg"></audio></div>`;
      tracklist.innerHTML += track;
    });
    lightbox.style.display = "block";
    container.classList.add('no-scroll');

    let closeBtn = document.querySelector('.ion-ios-close-outline');
    closeBtn.addEventListener('click', closeBox, false);

    function closeBox() {
      lightbox.style.display = "none";
      container.classList.remove('no-scroll');
    }
  }

  function getGenre(){
  let url = 'movies/genre';

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      let select = document.querySelector('.select');
      data.genre.forEach((item) => {
        let option = `<option value="${item.genre_id}">${item.genre_name}</option>`;
        select.innerHTML += option;
      });
      select.addEventListener('change', filterMovies, false);
    })
    .catch(function(error) {
      console.log(error);
    });
  }

  function filterMovies(e){
    let select = document.querySelector('.select');
    let value = select.value;
    let url = 'movies/genre/'+value;

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          let container = document.querySelector('#movies');
          while(container.firstChild) {
               container.removeChild(container.firstChild);
             }
             data.movie.forEach((movie) => {
               let newInfo = `<div id="${movie.movies_id}" class="movie-cover">
                   <h4>${movie.movies_title}</h4>
                   <img src="images/${movie.movies_cover}" alt="${movie.movies_title}">
                 </div>`;
               container.innerHTML += newInfo;
             });
             let coverMovie = document.querySelectorAll('.movie-cover');
             coverMovie.forEach((movie) => {
               movie.addEventListener('click', getSingle, false);
             });
        })
        .catch(function(error) {
          console.log(error);
        });



  }



})();
