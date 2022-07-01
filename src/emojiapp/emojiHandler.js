const { html } = require("./emojiStyle.js");

const emojiHandler = (database) => (req, res) => {
  if (req.url.includes('emoji')) {
    console.log('Find for all emojis');

    const content = html(database);
    res.setHeader('content-type', 'text/html');
    res.end(content);
    return true;
  }
  return false;
};

module.exports = { emojiHandler };
