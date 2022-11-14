function herdTheBabies (str) {

  if (str === "") {
    return str;
  } else {

  const charArray = [];

  for (i = 0; i < str.length; i++) {
    charArray.push(str[i])
  }

  const sortCharArray = charArray.sort()

  const newStr = sortCharArray.join("")
  return newStr;
  };
};

module.exports = herdTheBabies;
