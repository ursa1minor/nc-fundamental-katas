// Function takes a sentence and converts it to upper or lower camel case
// Takes 2 arguments; sentence and a boolean, true if UpperCamelCase required, if lowerCamelCase

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
    };

    newSentence = newArr.join('');   
     if (boolean === false) {
      return newSentence[0].toLowerCase() + newSentence.substring(1);
    } else if (boolean === true) {
      return newSentence;
    };
  };
};

module.exports = sentenceToCamelCase;
