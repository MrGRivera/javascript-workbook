'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  // Your code here
  word = word.toLowerCase();
  word = word.trim();
  let vowelString = "aeiou"

  

  let findVowel = (word) => {
    for (let i = 0; i < word.length; i++) {
      if (vowelString.indexOf(word[i]) !== -1) {
        return i;
      }
    }
  }

  if (firstVowel > 0) {
    return endOfWord + begOfWord + "ay";
  } else {
    return word + "yay";
  }

  let firstVowel = findVowel(word);
  let begOfWord = word.substring(0, firstVowel);
  let endOfWord = word.substring(firstVowel);

  
  

}


const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
