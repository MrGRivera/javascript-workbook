'use strict'



//do...while loop to console.log numbers from 1 to 1000
let i = 0;
do {
  i++;
  console.log(i);
} while (i < 1000);


//create an object called person
let person = {
  //key, value pairs
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  birthYear: 1925,
  gender: "female"
};

//use for..in loop and if statement
//to console.log birthDate if year is an odd number
for (let key in person) {
  if (person.birthYear % 2 !== 0) {
    console.log(person.birthDate);
  }
}



//Create an arrayOfPersons that contains multiple objects
let person1 = {
  firstName: "Jane",
  lastName: "Doe",
  birthYear: 1925,
  birthDate: "Jan 5, 1925",
  gender: "female"
};

let person2 = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1986,
  birthDate: "Feb 9, 1986",
  gender: "male"
};

let person3 = {
  firstName: "Joe",
  lastName: "Shmoe",
  birthYear: 1998,
  birthDate: "Jul 21, 1998",
  gender: "male"
};


let arrayOfPersons = [person1, person2, person3];

//Use .map() to map over the arrayOfPersons
//console.log() their information
function description (element) {
  console.log(element);
}

let people = arrayOfPersons.map(description);

//Use .filter() to filter the persons array 
//console.log only males in the array
function isMale (element, index){
  if(element.gender == "male"){
    console.log(element);
  }

}

let checkMale = arrayOfPersons.filter(isMale);

//Use .filter() to filter the persons array
//console.log only people that were born before Jan 1, 1990

function isOld (element){
  if(element.birthYear<1990){
    console.log(element);
  }
}

let bornBefore = arrayOfPersons.filter(isOld);