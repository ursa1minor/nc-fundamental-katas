const dnaPairs = require('../dna-pairs.js');

describe('dnaPairs()', () => {
  test('empty string returns empty array', () => {
    expect(dnaPairs("")).toEqual([]);
  });
});
