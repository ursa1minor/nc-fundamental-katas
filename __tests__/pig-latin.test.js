
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

});
