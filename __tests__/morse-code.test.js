const morseCode = require('../morse-code/morse-code.js');

describe('morseCode()', () => {
  test('empty string returns empty string', () => {
    expect(morseCode("")).toBe("");
  });
  test('single character is output correctly', () => {
    expect(morseCode("....")).toBe("H");
  });
  test('HI is output correctly from morse code H and I', () => {
    expect(morseCode(".... ..")).toBe("HI");
  });
  test('HELLO is output correctly from morse code', () => {
    expect(morseCode(".... . .-.. .-.. ---")).toBe("HELLO");
  });
  test('NORTHCODERS is output correctly from morse code', () => {
    expect(morseCode("-. --- .-. - .... -.-. --- -.. . .-. ...")).toBe("NORTHCODERS");
  });
  test('Sentence outputs correctly from morse code', () => {
    const morse = "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
    expect(morseCode(morse)).toBe("GOOD MORNING NORTHCODERS");
  });
  

});
