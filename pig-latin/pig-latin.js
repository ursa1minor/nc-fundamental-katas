// function that translates English strings into Pig Latin.

// To translate to [Pig Latin](https://en.wikipedia.org/wiki/Pig_Latin) you take the first consonant (or consecutive consonants) of each word, move it to the end and also append 'ay'. If the word starts with a vowel, just append 'way' at the end.

function pigLatin(str) {
  if (str.length === 0) {
    return "";}
    console.log(str[0]);
  
 if (str.startsWith("a" || "e" || "i" || "o" || "u")) {
    return (str + "way");
}
if (str.startsWith("a" || "e" || "i" || "o" || "u") === false) {
  return (str.substring(1) + str[0] + "ay");
} 
}

module.exports = pigLatin
