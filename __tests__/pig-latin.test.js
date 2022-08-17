const {pigLatin, littlePig} = require('../pig-latin/pig-latin.js');

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
  test('string starts with vowel, returns string ending in first letter + way', () => {
    expect(pigLatin("on")).toBe("onway");
  });
  test('string of words returns each word as pig Latin', () => {
    expect(pigLatin("keep on coding")).toBe("eepkay onway odingcay")
  });

});
