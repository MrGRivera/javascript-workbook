'use strict'

console.log('loaded script');

let arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]
console.log(arrOfPeople);

let listOfPlayers = [];
let blueTeam = [];
let redTeam = [];

class Player {
  constructor(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;

  }
}

class Teammate extends Player {
  constructor(id, name, age, color) {
    super(id, name, age);
    this.color = color;
  }
}

let makeTeammate = (id, color) => {
  let li = document.getElementById(id)
  li.parentNode.removeChild(li)

  listOfPlayers.forEach((player) => {
    if (player.id == id) {
      let newTeammate = new Teammate(player.id, player.name, player.age, color);
      if (color == 'Red') {
        redTeam.push(newTeammate);
      } else {
        blueTeam.push(newTeammate);
      }

      addTeammate(newTeammate);
    }
  })

  listOfPlayers.filter((player) => {
    player.id != id;

  });

}

let addTeammate = (teammate) => {
  console.log(teammate);
  let listEle = document.getElementById(teammate.color.toLowerCase());
  let li = document.createElement('li');
  li.id = teammate.id;
  li.appendChild(document.createTextNode(`Name: ${teammate.name}, Age: ${teammate.age}`))
  listEle.append(li);
}

let addPlayer = (player) => {
  let listEle = document.getElementById('players')
  let li = document.createElement('li')
  li.id = player.id
  let redButton = document.createElement('button');
  redButton.innerText = 'Make Red';
  redButton.addEventListener('click', function(){
    makeTeammate(player.id, 'Red')
  })
  li.appendChild(redButton);

  let blueButton = document.createElement('button');
  blueButton.innerText = 'Make Blue';
  blueButton.addEventListener('click', function(){
    makeTeammate(player.id, 'Blue')
  })
  li.appendChild(blueButton);

  li.appendChild(document.createTextNode(`Name: ${player.name}, Age: ${player.age}`))
  listEle.append(li);
}


let listPlayers = () => {
  let listEle = document.getElementById('people')
  arrOfPeople.map(person => {
    let li = document.createElement('li')
    li.id = person.id;
    let button = document.createElement('button')
    button.innerText = 'Make Player'
    button.addEventListener('click', function(){
      makePlayer(person.id)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(`Name: ${person.name}, Age: ${person.skillSet}`))
    listEle.append(li)
  })
}

let makePlayer = (id) => {
  let li = document.getElementById(id)
  li.parentNode.removeChild(li);

  arrOfPeople.forEach((person) => {
    if(person.id == id){
      let newPlayer = new Player(person.id, person.name, person.age);
      listOfPlayers.push(newPlayer);
      addPlayer(newPlayer);
    }
  })
  arrOfPeople.filter((person) => {
    person.id != id;
  })
}