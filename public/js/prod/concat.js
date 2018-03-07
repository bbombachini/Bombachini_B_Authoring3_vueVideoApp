var myApp = {
  // we could put module-specific global variables here
  mainMessage : "Welcome to the app!",

  mainGreeting() {
    console.log('hey! welcome to the app! this is awesome');
  }
};

myApp.module1 = {
  // this would be a feature-specific module, like all things video
  saySomething(message) {
    console.log(myApp.mainMessage, message, `I'm the second file!`);
  },

  doSomething() {
    console.log('called module1 doSomething', 'hey, this just changed!');
  }
};

myApp.module2 = {
  // add another module
  doSomethingElse() {
    console.log('called doSomethingelse from module 2', 'changing this file');
  }
};

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
