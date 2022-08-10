function getTweetData (tweet) {
  
  const tweetData = {};

  tweetData.tags = [];
  tweetData.mentions = [];
  tweetData.tagCount = 0;
  tweetData.mentionCount = 0;
  tweetData.length = tweet.length;

  if (tweet.includes("#")) {
    tweetData.tagCount++;

  const tagStart = (tweet.search("#")); // first char index
  const tagOne = tweet.slice(tagStart);

    if (tagOne.includes(" ") === false) {
    tweetData.tags.push(tagOne); 
    } else {

    const tagEnd = tagOne.search(" "); // space char index
    tweetData.tags.push(tagOne.slice(0, tagEnd))
    }
  }
  
  if (tweet.includes("@")) {
    tweetData.mentionCount++;  
  
  const mention = (tweet.search("@"));
    tweetData.mentions.push(tweet.slice(mention));
  }

  return tweetData;
};

module.exports = getTweetData;
