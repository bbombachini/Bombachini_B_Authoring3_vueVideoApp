(() => {
  if(document.querySelector('.options')){
    let movies = document.querySelector('.movies');

    function getMovies(){
      let url = 'movies';

      fetch(url)
        .then((resp) => resp.json())
          .then((data) =>{
            console.log(data);
          })
          .catch(function(error) {
            console.log(error);
          });
    }


    movies.addEventListener('click', getMovies, false);
  }

})();
