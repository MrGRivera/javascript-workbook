'use strict'

let button = document.querySelector('.btn');
let name = document.querySelector('#name');



function getFilm() {

  
  fetch('https://swapi.dev/api/films/')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let filmNames = data.results;
      console.log(filmNames);
      filmNames.forEach(function(movie){
        filmNames = movie.title
        console.log(filmNames);
      });
      name.innerText = filmNames;
    })
    .catch(function (error) {
      console.log(error);
    })
}


function updateFilmName (){

}




button.addEventListener('click', getFilm);



