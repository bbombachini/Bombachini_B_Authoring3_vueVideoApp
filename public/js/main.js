(() => {

  if(document.querySelector('.options')){
    let movies = document.querySelector('.movies');
    movies.addEventListener('click', getMovies, false);
  }
  if(document.querySelector('#movies')){
    let coverMovie = document.querySelectorAll('.movie-cover');
    coverMovie.forEach((movie) => {
      movie.addEventListener('click', getSingle, false);
    });
    getGenre.call();
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
