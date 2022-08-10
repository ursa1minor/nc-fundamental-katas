function getTweetData (tweet) {
  const newTweet = {};

  newTweet.tags = [];
  newTweet.mentions = [];
  newTweet.tagCount = 0;
  newTweet.mentionCount = 0;
  newTweet.length = tweet.length;
  
  return newTweet;
};

module.exports = getTweetData;
