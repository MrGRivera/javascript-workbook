let str = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day";




let letterCounts = {
  

}
str = str.toLowerCase();
str = str.trim();
str = str.replace(/\s/g, '');     

for (let i=0; i<str.length; i++){
if(letterCounts[str[i]]){
  // if i have seen the letter before
  letterCounts[str[i]]++; 
} else {
  // letter is not in the counter object (dictionary) 
  letterCounts[str[i]] = 1;
}
}
// console.log(str);
console.log(letterCounts);


