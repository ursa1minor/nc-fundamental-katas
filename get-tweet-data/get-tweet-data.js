function getTweetData (tweet) {
  
  const tweetData = {};

  tweetData.tags = [];
  tweetData.mentions = [];
  tweetData.tagCount = 0;
  tweetData.mentionCount = 0;
  tweetData.length = tweet.length;

  // tags and tagCount

  if (tweet.includes("#")) {
    tweetData.tagCount++;
  const tagStart = (tweet.search("#")); // first char index
  const tagOne = tweet.slice(tagStart);

      if (tagOne.includes(" ") === false) {
        tweetData.tags.push(tagOne); 
      } else {
      const tagEnd = tagOne.search(" "); // space index
      tweetData.tags.push(tagOne.slice(0, tagEnd))
      }
  }

  // mentions and mentionCount
  
  if (tweet.includes("@")) {
    tweetData.mentionCount++;  
  
  const mentionStart = (tweet.search("@")); // first char index
  const mentionOne = tweet.slice(mentionStart);

    if (mentionOne.includes(" ") === false) {
      tweetData.mentions.push(mentionOne);
    } else {
      const mentionEnd = mentionOne.search(" "); // space index
      tweetData.mentions.push(mentionOne.slice(0, mentionEnd))
    }
    
  }
  return tweetData;
};

module.exports = getTweetData;
