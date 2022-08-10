const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('empty string returns empty array', () => {
    expect(dnaPairs("")).toEqual([]);
  });
  test('Single input character generates 1 nested array', () => {
    expect(dnaPairs("G")).toEqual([["G", "C"]]);
  });
  test('input AG returns 2 nested arrays', () => {
    expect(dnaPairs("AG")).toEqual([["A", "T"], ["G", "C"]]);
  });
  test('input ATAG returns 4 nested arrays', () => {
    expect(dnaPairs("ATAG")).toEqual([["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"]]);
  });
});
