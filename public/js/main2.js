const homeApp = {
  // listen() {
  //   let select = document.querySelector('.select'),
  //   select.forEach((item) => {
  //       item.addEventListener('change', movieGenres, false);
  //     }),
  // },

  // movieGenres(data, genre) {
  //   console.log(genre);
  //   movies: data.filter(movie => movie.genre_name === genre)
  // },

  vm: new Vue({
    el : '#app',
    data : {
      message: "Movies",
      genre: "",
      movies: appData.movies
    },
    methods : {
      movieGenres(data, genre) {
        console.log(genre);
        movies: data.filter(movie => movie.genre_name === genre)
      }
    },
    watch: {
      genre: function(){
        console.log("watch");
      }
    },
    delimiters : ["${", "}"]
  })
}



// homeApp.listen();
// homeApp.movieGenres(appData.movies, homeApp.vm.genre);
