const fs = require('fs');
const { getHtml } = require('./emojiStyle.js');

const specificEmoji = (database) => (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.url.includes('emoji') && url.searchParams.get('emoji')) {
    console.log('Find for specific emoji');
    const emoji = url.searchParams.get('emoji');
    const content = getHtml(`<img src="${database[emoji]}">`);

    res.setHeader('content-type', 'text/html');
    res.end(content);
    return true;
  }
  return false;
}

module.exports = { specificEmoji };
