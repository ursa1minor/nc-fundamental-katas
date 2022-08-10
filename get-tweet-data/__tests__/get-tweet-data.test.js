const getTweetData = require('../get-tweet-data.js');

describe.only('getTweetData()', () => {
  test('return tweet data object', () => {
    expect(getTweetData("My awesome tweet")).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 });
  });
});
