// function takes string of any length and turns each word inside out while keeping the order of the words intact.

// To turn a word inside out the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move.

// If the length is odd, leave the 'middle' letter of the word where it is.

// Function should also work for strings with spaces.

function foldWord (str) {
  const str1 = str.substring(0, Math.floor(str.length/2));
  const str2 = str.substring(Math.ceil(str.length/2));
  const str1Array = str1.split('');
  const str2Array = str2.split('');
  const strMid = str[Math.floor(str.length/2)];
  const rev1 = str1Array.reverse();
  const rev2 = str2Array.reverse()
  
  if (str.length%2 === 1) {
    return rev1.join('') + strMid + rev2.join('');
  } else {
  return rev1.join('') + rev2.join('');
  }
}

function foldString (str) {

  if (str === "" || str.length === 1) {
    return str;
  } 

  if (str.includes(" ") === false) { //not a sentence
    return foldWord(str);
  } 
  if (str.includes(" ")) { // is a sentence
    const strArray = str.split(' ');
    const newArray = strArray.map( word => foldWord(word));
    return newArray.join(" ");
  }
}

module.exports = foldString
