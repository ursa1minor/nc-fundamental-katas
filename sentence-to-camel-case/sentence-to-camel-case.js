// function which takes a sentence and converts it to upper or lower camel case

// The function takes two arguments; the sentence, and a boolean, true if UpperCamelCase is to be returned and false if lowerCamelCase is to be returned

//Capitalise first character of a string
// string[0].toUpperCase();= first letter capitalised

// + string.substring(1) = rest of the word

function sentenceToCamelCase (sentence, boolean) {

  if (sentence === " ") {
    return sentence;
  } else {
    
    sentence = sentence.toLowerCase();
    const camelCase = sentence.split(" "); 
    const newArr = [];
    let newSentence = "";

    for (let i = 0; i < camelCase.length; i++) {
      newArr.push(camelCase[i][0].toUpperCase() + camelCase[i].substring(1));
    }
    //console.log(newArr);
      newSentence = newArr.join('');   
    //const newSentence = newArr[0] + newArr[1];

     if (boolean === false) {
      return newSentence[0].toLowerCase() + newSentence.substring(1);
    } else if (boolean === true) {
      return newSentence;
    }
}}

module.exports = sentenceToCamelCase;
