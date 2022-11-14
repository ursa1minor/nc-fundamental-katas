function herdTheBabies (str) {

  if (str === "") { 
    return str;
  }; 

  const charArray = [];

    for (i = 0; i < str.length; i++) {
      charArray.push(str[i])
    };

  const sortCharArray = charArray.sort();

// sort order is uppercase then lowercase: parents then children - want parent, child, parent, child

  const codeArray = [];

    for (let element of sortCharArray) {
      let code = element.charCodeAt();
        codeArray.push(code);
      };
 
    const newCodeArray = [];

    for (let i = 0; i < codeArray.length; i++) {
      if (codeArray[i] < 97) {  
        newCodeArray.push(codeArray[i]);

// check no multiple parents ahead; check for children
          
        if (codeArray[i] !== codeArray[i + 1]) {
          let child = codeArray[i] + 32;
          let children = codeArray.filter(num => num === child);
    
        for (let j = 0; j < children.length; j++) {
            newCodeArray.push(child);
            };
          };
        } else {

// if child: are there parents? If not, push child

        let parent = codeArray[i] - 32;
        let parents = codeArray.filter(num => num === parent)

        if (!parents.length) {
          newCodeArray.push(codeArray[i]);
        };
      };
    };

    const newCharArray = [];

    for (let code of newCodeArray) {
      let newChar = String.fromCharCode(code);
      newCharArray.push(newChar)
    }

    const newStr = newCharArray.join("")
    return newStr;
 
};

module.exports = herdTheBabies;
