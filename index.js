const { server } = require("./src/server/server.js");
const { emojiHandler } = require("./src/emojiapp/emojiHandler");

const handlers = [emojiHandler];

const handle = (handlers) => (request, response) => {
  for (const handler of handlers) {
    if (handler(request, response)) {
      return true;
    }
  }
  return false;
};

const PORT = 4455;
server(PORT, handle(handlers));
