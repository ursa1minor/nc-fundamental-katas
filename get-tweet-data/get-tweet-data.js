function getTweetData (tweet) {
  
  const tweetData = {};

  tweetData.tags = [];
  tweetData.mentions = [];
  tweetData.tagCount = 0;
  tweetData.mentionCount = 0;
  tweetData.length = tweet.length;

  if (tweet.includes(" @")) {
    tweetData.mentionCount++;
  }

  return tweetData;
};

module.exports = getTweetData;
