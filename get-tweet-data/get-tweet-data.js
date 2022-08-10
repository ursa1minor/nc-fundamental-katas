function getTweetData (tweet) {
  
  const tweetData = {};

  tweetData.tags = [];
  tweetData.mentions = [];
  tweetData.tagCount = 0;
  tweetData.mentionCount = 0;
  tweetData.length = tweet.length;

  if (tweet.includes("#")) {
    tweetData.tagCount++;

  const tag = (tweet.search("#"));
    tweetData.tags.push(tweet.slice(tag));
  }
  
  if (tweet.includes(" @")) {
    tweetData.mentionCount++;  
  
  const mention = (tweet.search(" @"));
    tweetData.mentions.push(tweet.slice(mention + 1));
  }

  return tweetData;
};

module.exports = getTweetData;
