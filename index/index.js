const PubNub = require('pubnub');

const pubnub = new PubNub({
  publishKey: "myPublishKey",
  subscribeKey: "mySubscribeKey",
  userId: "myUniqueUserId",
});
