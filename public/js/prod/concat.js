(() => {

  if(document.querySelector('#movies')){
    getGenre.call();
  }

  function getGenre(){
  let url = '/genres';

  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // console.log(data);
      let select = document.querySelector('.select');
      data.genres.forEach((item) => {
        let option = `<option value="${item.genre_id}">${item.genre_name}</option>`;
        select.innerHTML += option;
      });
      // select.addEventListener('change', filterMovies, false);
    })
    .catch(function(error) {
      console.log(error);
    });
  }
  //
  // function filterMovies(e){
  //   let select = document.querySelector('.select');
  //   let value = select.value;
  //   let url = 'movies/genre/'+value;
  //
  //     fetch(url)
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         // console.log(data);
  //         let container = document.querySelector('#movies');
  //         while(container.firstChild) {
  //              container.removeChild(container.firstChild);
  //            }
  //            data.movie.forEach((movie) => {
  //              let newInfo = `<div id="${movie.movies_id}" class="cover">
  //                  <h4>${movie.movies_title}</h4>
  //                  <img src="images/${movie.movies_cover}" alt="${movie.movies_title}">
  //                </div>`;
  //              container.innerHTML += newInfo;
  //            });
  //            let coverMovie = document.querySelectorAll('.cover');
  //            coverMovie.forEach((movie) => {
  //              movie.addEventListener('click', getSingle, false);
  //            });
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  // }
})();
