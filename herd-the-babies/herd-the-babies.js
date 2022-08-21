function herdTheBabies (str) {

  if (str === "") {
    return str;
  } else {

  const charArray = [];

  let upperCode = 65;
  let lowerCode = 97;

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === upperCode) {
      charArray.push(str[i])
    }}

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === lowerCode) {
      charArray.push(str[i])   
    }}
  
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === upperCode + 1) {
      charArray.push(str[i])
      }}
  
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === lowerCode + 1) {
      charArray.push(str[i])
      }}

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === upperCode + 2) {
      charArray.push(str[i])
        }}
    
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) === lowerCode + 2) {
      charArray.push(str[i])      
        }}

  const newStr = charArray.join("")
  return newStr;
};
};

module.exports = herdTheBabies;
