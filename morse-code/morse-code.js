// The challenge is to implement a function which decodes a morse code string!
// The morse code will have a space between each letter and three between each word

const morse = {
  A : ".-",
  B : "-...", 
  C : "-.-.",  
  D : "-..",   
  E : ".",    
  F : "..-.",  
  G : "--.",   
  H : "....",  
  I : "..",    
  J : ".---",  
  K : "-.-",   
  L : ".-..",  
  M : "--",    
  N : "-.",    
  O : "---",  
  P : ".--.",  
  Q : "--.-",  
  R : ".-.",   
  S : "...",   
  T : "-",     
  U : "..-",   
  V : "...-",  
  W : ".--",  
  X : "-..-",  
  Y : "-.--", 
  Z : "--..", 
  0 : "-----", 
  1 : ".----",
  2 : "..---", 
  3 : "...--", 
  4 : "....-", 
  5 : ".....", 
  6 : "-....", 
  7 : "--...", 
  8 : "---..", 
  9 : "----." }

function decodeMorseChar (str) {
  const morseArray = Object.values(morse);
  const charArray = Object.keys(morse);
  
  if (morseArray.includes(str)) {
    const i = morseArray.indexOf(str);
    return charArray[i];
  }
}


function morseCode (str) {
  if (str.length === 0) {
    return "";
  } else if (str.includes(" ") === false) {
    return decodeMorseChar(str);
  } else {
    const morseChars = str.split(" "); // array
    console.log(morseChars)
    const englishChars = morseChars.map(char => decodeMorseChar(char));
    console.log(englishChars)
    return englishChars.join("");
  }

  
  };

module.exports = {morseCode, decodeMorseChar};
