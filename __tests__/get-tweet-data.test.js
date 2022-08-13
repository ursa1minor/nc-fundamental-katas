const getTweetData = require('../get-tweet-data/get-tweet-data.js');

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

  test('return tag count for 1 tag', () => {
    const myTweet = "My awesome tweet about #coding";
    expect(getTweetData(myTweet)).toEqual({ tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30 });
  });

  test('return correct data for 1 mention and 1 tag', () => {
    const myTweet = "My awesome tweet about #coding to @northcoders";
    expect(getTweetData(myTweet)).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46 });
  });

  test('return correct data for 2 mentions and 2 tags', () => {
    const myTweet = "I am #coding with @northcoders I love #coding and @northcoders";
    expect(getTweetData(myTweet)).toEqual({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 });
  });

});
