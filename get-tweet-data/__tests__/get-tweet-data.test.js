const getTweetData = require('../get-tweet-data.js');

describe('getTweetData()', () => {
  test('return tweet data object', () => {
    
    const myTweet = "My awesome tweet";
    
    expect(getTweetData(myTweet)).toEqual({ tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16 });
  });

  test('return tweet mention count 1 for 1 mention', () => {
    const myTweet = "My awesome tweet to @northcoders";
    expect(getTweetData(myTweet).mentionCount).toBe(1);
  });

  test('return tweet mentions for 1 mention', () => {
    const myTweet = "My awesome tweet to @northcoders";
    expect(getTweetData(myTweet).mentions).toEqual(["@northcoders"]);
  });
});
