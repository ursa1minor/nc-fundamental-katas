const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('empty string returns empty array', () => {
    expect(dnaPairs("")).toEqual([]);
  });
  test('input G returns nested array containing G C', () => {
    expect(dnaPairs("G")).toEqual([["G", "C"]]);
  });
});
