const fs = require('fs');
const { handle } = require("./src/server/handlers.js");
const { server } = require("./src/server/server.js");
const { specificEmoji } = require("./src/emojiapp/specificEmoji.js");
const { emojiHandler } = require("./src/emojiapp/emojiHandler");
const { emojiNotFound } = require('./src/emojiapp/emojiNotFound.js');

const database = JSON.parse(fs.readFileSync('./src/emojiapp/emoji.json', 'utf8'));

const handlers = [
  emojiNotFound(database),
  specificEmoji(database),
  emojiHandler(database)
];

const PORT = 4455;
server(PORT, handle(handlers));
