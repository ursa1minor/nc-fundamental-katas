// function which takes a string of any length and turns each word inside out while keeping the order of the words intact.

// To turn a word inside out the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move.

// If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// Your function should also work for strings with spaces.

// Remember to start testing with the most basic cases when building up your test suite.

function foldString (str) {

if (str.includes(" ") === false) {

  if (str === "" || str.length === 1) {
  return str;
  } else {

  const str1 = str.substring(0, Math.floor(str.length/2));
  const str2 = str.substring(Math.ceil(str.length/2));
  const str1Array = str1.split('');
  const str2Array = str2.split('');
  const strMid = str[Math.floor(str.length/2)];
  const rev1 = str1Array.reverse();
  const rev2 = str2Array.reverse()
  if (str.length%2 === 1)
  {return rev1.join('') + strMid + rev2.join('');} else 
  return rev1.join('') + rev2.join('');
}
} else {
  const strArray = str.split(' ');
  const newArray = [];
  for (let word of strArray) {
      let newWord;
      const word1 = word.substring(0, Math.floor(word.length/2));
      const word2 = word.substring(Math.ceil(word.length/2));
      const word1Array = word1.split('');
      const word2Array = word2.split('');
      const wordMid = word[Math.floor(str.length/2)];
      const wordRev1 = word1Array.reverse();
      const wordRev2 = word2Array.reverse()
      
      if (word.length%2 === 1)
      {newWord = wordRev1.join('') + wordMid + wordRev2.join('');} else 
      newWord = wordRev1.join('') + wordRev2.join('');

      newArray.push(newWord);
  }
  console.log(newArray.join(' '));
  return newArray.join(' ');
}


}

// function foldString (str) {

//   if (str.includes(" ") === false) {
  
//   if (str === "" || str.length === 1) {
//     return str;
//   } else {
//   if (str.length%2 === 0) {
//     let str1 = str.substring(0, str.length/2);
//     let str2 = str.substring(str.length/2);
//     let str1Array = str1.split('');
//     let str2Array = str2.split('');
//     let rev1 = str1Array.reverse();
//     let rev2 = str2Array.reverse()
//     return rev1.join('') + rev2.join('')
//   } else {
//     let str1 = str.substring(0, Math.floor(str.length/2));
//     let str2 = str.substring(Math.ceil(str.length/2));
//     let str1Array = str1.split('');
//     let str2Array = str2.split('');
//     let strMid = str[Math.floor(str.length/2)];
//     let rev1 = str1Array.reverse();
//     let rev2 = str2Array.reverse()
//     return rev1.join('') + strMid + rev2.join('');
//   }
//   }}}
  





module.exports = foldString
