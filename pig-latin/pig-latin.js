// function that translates English strings into Pig Latin.

// To translate to [Pig Latin](https://en.wikipedia.org/wiki/Pig_Latin) you take the first consonant (or consecutive consonants) of each word, move it to the end and also append 'ay'. If the word starts with a vowel, just append 'way' at the end.

function pigLatin(str) {
  if (str.length === 0) {
    return "";}
  
  if (str.includes(" ")) {
    const words = str.split(" "); //array
    const pigWords = words.map(word => littlePig(word)); //array
    return pigWords.join(" ");

  } else {
  return littlePig(str);
}}

function littlePig(str) {
  if (str.startsWith("a") || str.startsWith("e") || str.startsWith("i") || str.startsWith("o") || str.startsWith("u")) {
    return (str + "way");
  }
  if (str.startsWith("a" || "e" || "i" || "o" || "u") === false) {
  return (str.substring(1) + str[0] + "ay");
  } 
}

module.exports = {pigLatin, littlePig};
