// ## Morse Code Table

// | Letter | Code  |
// | ------ | ----- |
// | A      | .-    |
// | B      | -...  |
// | C      | -.-.  |
// | D      | -..   |
// | E      | .     |
// | F      | ..-.  |
// | G      | --.   |
// | H      | ....  |
// | I      | ..    |
// | J      | .---  |
// | K      | -.-   |
// | L      | .-..  |
// | M      | --    |
// | N      | -.    |
// | O      | ---   |
// | P      | .--.  |
// | Q      | --.-  |
// | R      | .-.   |
// | S      | ...   |
// | T      | -     |
// | U      | ..-   |
// | V      | ...-  |
// | W      | .--   |
// | X      | -..-  |
// | Y      | -.--  |
// | Z      | --..  |
// | 0      | ----- |
// | 1      | .---- |
// | 2      | ..--- |
// | 3      | ...-- |
// | 4      | ....- |
// | 5      | ..... |
// | 6      | -.... |
// | 7      | --... |
// | 8      | ---.. |
// | 9      | ----. |


//morseDecode(".... ..");
// should return "HI"

//morseDecode(".... . .-.. .-.. ---");
// should return "HELLO"

//morseDecode("-. --- .-. - .... -.-. --- -.. . .-. ...");
// should return "NORTHCODERS"

//const morse =
//   "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
//morseDecode(morse);
// should return "GOOD MORNING NORTHCODERS"



const morseCode = require('../morse-code/morse-code.js');

describe('morseCode()', () => {
  test('empty string returns empty string', () => {
    expect(morseCode("")).toBe("");
  });
  

});
