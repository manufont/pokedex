const Twitter = require("twitter");
const WebSocket = require("ws");
const url = require("url");
const dotenv = require("dotenv");

dotenv.load();

var twitterClient = new Twitter({
  consumer_key: process.env.SERVER_TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.SERVER_TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.SERVER_TWITTER_TOKEN_KEY,
  access_token_secret: process.env.SERVER_TWITTER_TOKEN_SECRET
});

const wss = new WebSocket.Server({ port: 4100 });

function getTweetText(status) {
  return {
    text: status.text,
    datetime: status.created_at
  };
}

function handleTwitterApiError(error, socket) {
  switch (error.code) {
    case 215: //'Bad Authentication data'
      console.error(
        "Bad Authentication data: Please enter valid Twitter API consumer & token keys in .env file"
      );
      socket.close();
      break;
    case 420: //'Enhance Your Calm'
      console.error("API rate limit reached");
      break;
    default:
      console.error(error);
  }
}

wss.on("connection", function(socket, request) {
  const keyword = url.parse(request.url, true).query.keyword;

  twitterClient
    .get("search/tweets", { q: keyword })
    .then(function(response) {
      socket.send(JSON.stringify(response.statuses.map(getTweetText)));
    })
    .catch(function(errors) {
      errors.forEach(handleTwitterApiError);
    });

  const stream = twitterClient.stream("statuses/filter", { track: keyword });
  stream.on("data", function(tweet) {
    socket.send(JSON.stringify([getTweetText(tweet)]));
  });

  stream.on("error", handleTwitterApiError);

  socket.on("close", function() {
    stream.destroy();
  });
});

console.log("running Tweet Socket server on port 4100...");
