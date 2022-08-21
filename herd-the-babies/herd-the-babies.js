function herdTheBabies (str) {

  if (str === "") {
    return str;
  } else {

  const charCodeArray = [];

  for (let i = 0; i < str.length; i++) {
    charCodeArray.push(str.charCodeAt(i))
  }
  charCodeArray.sort();

  console.log(charCodeArray);

  const charArray = charCodeArray.map(x => String.fromCharCode(x));

  console.log(charArray);

  const newStr = charArray.join("")

  return newStr;
};
};

module.exports = herdTheBabies;
