const homeApp = {
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

    },
    delimiters : ["${", "}"]
  })
}

// homeApp.movieGenres(appData.movies, homeApp.vm.genre);
