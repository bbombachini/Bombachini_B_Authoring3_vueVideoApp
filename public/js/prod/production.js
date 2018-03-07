'use strict';

var myApp = {
  // we could put module-specific global variables here
  mainMessage: "Welcome to the app!",

  mainGreeting: function mainGreeting() {
    console.log('hey! welcome to the app! this is awesome');
  }
};

myApp.module1 = {
  // this would be a feature-specific module, like all things video
  saySomething: function saySomething(message) {
    console.log(myApp.mainMessage, message, 'I\'m the second file!');
  },
  doSomething: function doSomething() {
    console.log('called module1 doSomething', 'hey, this just changed!');
  }
};

myApp.module2 = {
  // add another module
  doSomethingElse: function doSomethingElse() {
    console.log('called doSomethingelse from module 2', 'changing this file');
  }
};

(function () {
  if (document.querySelector('.options')) {
    var getMovies = function getMovies() {
      var url = 'movies';

      fetch(url).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        console.log(data);
      }).catch(function (error) {
        console.log(error);
      });
    };

    var movies = document.querySelector('.movies');

    movies.addEventListener('click', getMovies, false);
  }
})();
