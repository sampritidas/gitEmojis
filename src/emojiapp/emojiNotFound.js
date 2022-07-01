const emojiNotFound = (database) => (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.url.includes('emoji') && url.searchParams.get('emoji')) {
    const emoji = url.searchParams.get('emoji');

    if (database[emoji] === undefined) {
      console.log('emoji not found');
      res.statusCode = 404;
      res.end('Emoji not found');
      return true;
    }
  }
  return false;
};

module.exports = { emojiNotFound };
