const myApp = {
  //some non-VM functionality
  // movieGenres(data, genres) {
  //   genres.forEach((genre, index) => {
  //     myApp.vm.genres.push({
  //       name: genre,
  //       movies: data.filter(movie => movie.genre_name === genre)
  //     })
  //   })
  // },
  //
  vm: new Vue({
    el : '#app',
    data : {
      message: "Movies"
      // genres: []
    },
    methods : {

    },
    delimiters : ["${", "}"]
  })
}

// myApp.movieGenres(appData.movies, ["Family", "Action", "Fantasy"]);
