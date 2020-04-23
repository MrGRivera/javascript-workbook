'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  // your code here

  let soultionArray = solution.split('');
  let guessArray = guess.split('');

  let exactMatch = 0;



  //check for exact match
  for (let i = 0; i < soultionArray.length; i++) {
    if (soultionArray[i] == guessArray[i]) {
      exactMatch++;
      soultionArray[i] = null;

    }
  }

  let partialMatch = 0;

  //check for partial match
  for (let n = 0; n < soultionArray.length; n++) {
    let targetIndex = guessArray.indexOf(soultionArray[n])
    if (targetIndex > -1) {
      partialMatch++;
      soultionArray[n] = null;

    }

  }
  return `${exactMatch}-${partialMatch}`;
}

function mastermind(guess) {
  solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

  //checks for win
  if (solution == guess) {
    console.log("You guessed it!");
    return "You guessed it!";
  }

  //place input on board with hint
  let hint = generateHint(guess);
  board.push(`${guess} ${hint}`);

  //user only has 10 moves
  if (board.length == 10) {
    console.log(`You ran out of turns! The solution was ${solution}`);
    return `You ran out of turns! The solution was ${solution}`;
  } else {
    console.log("Guess again.");
    return "Guess again."
  }




}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
