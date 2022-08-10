const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('empty string returns empty array', () => {
    expect(dnaPairs("")).toEqual([]);
  });
  test('Single input character generates 1 nested array', () => {
    expect(dnaPairs("G")).toEqual([["G", "C"]]);
  });
  // test('input A returns nested array containing A T', () => {
  //   expect(dnaPairs("A")).toEqual([["A", "T"]]);
  // });
});
