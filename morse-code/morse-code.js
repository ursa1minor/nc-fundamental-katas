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

function decodeMorseWord (str) {
  const morseChars = str.split(" "); // char array
        const englishChars = morseChars.map(char => decodeMorseChar(char));
      return englishChars.join("");
}


function morseCode (str) {
  if (str.length === 0) {
    return "";

  } else if (str.includes(" ") === false) { // single char
    return decodeMorseChar(str);

  } else if (str.includes(" ")) { 
    
      if (str.includes("   ") === false) { // single word
      return decodeMorseWord(str);
      
      } else {                                // sentence
        const morseWords = str.split("   "); // word array
        const englishWords = morseWords.map( word => decodeMorseWord(word));
        const englishSentence = englishWords.join(" ");
        return englishSentence;
      }
  }
};

module.exports = morseCode;
