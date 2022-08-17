

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



const {morseCode, decodeMorseChar} = require('../morse-code/morse-code.js');

describe('morseCode()', () => {
  test('empty string returns empty string', () => {
    expect(morseCode("")).toBe("");
  });
  test('single character is output correctly', () => {
    expect(morseCode("....")).toBe("H");
  });
//   test('HI is output correctly from morse code H and I', () => {
//     expect(morseCode(".... ..")).toBe("HI");
//   });
  

});
