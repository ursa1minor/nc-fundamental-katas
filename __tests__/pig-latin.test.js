
//pigLatin("northcoders");
// should return 'orthcodersnay'

//sample("sheffield");
// should return 'effieldshay'

//sample("algorithm");
// should return 'algorithmway'

//sample("keep on coding");
// should return 'eepkay onway odingcay'

const pigLatin = require('../pig-latin/pig-latin.js');

describe('pigLatin()', () => {
  test('empty string returns empty string', () => {
    expect(pigLatin("")).toBe("");
  });
  test('string starts with consonant, returns string ending in first letter + ay', () => {
    expect(pigLatin("northcoders")).toBe("orthcodersnay");
  });
  test('string starts with vowel, returns string ending in first letter + way', () => {
    expect(pigLatin("algorithm")).toBe("algorithmway");
  });

});
