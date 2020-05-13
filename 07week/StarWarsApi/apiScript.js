'use strict'

let button = document.querySelector('.btn');
let name = document.querySelector('#name');
let container = document.querySelector('.character-container')



function getFilm() {


  fetch('https://swapi.dev/api/films/')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.results);
      randomFilmName(data.results)
    })
    .catch(function (error) {
      console.log(error);
      alert('ERROR: THESE ARE NOT THE DROIDS YOU ARE LOOKING FOR');
    })
}


function randomFilmName(films) {
  let filmName = document.querySelector('#name')
  let randomChoice = Math.floor(Math.random() * 6)
  console.log(randomChoice);
  filmName.innerText = films[randomChoice].title
}

button.addEventListener('click', getFilm);
container.addEventListener('click', getFilm);



