const fs = require('fs');

const style = () => {
  return `<style>
    img{
      padding: 15px;
      height: 50px;
      width: 50px;
    }
  img:hover {
    background-color: bisque;
  }
  </style>`;
};

const head = () => {
  return `<head>${style()}</head>`;
}

const getHtml = (links) => {
  return `<html>${head()}<body>${links}</body></html>`;
};

const html = (filename) => {
  const content = JSON.parse(fs.readFileSync(filename, 'utf8'));
  const links = Object.keys(content).map((key) => {
    return `<img src="${content[key]}" title=${key}>${key}</img>`;
  });
  const htmlBlock = getHtml(links.join('\n'));
  return htmlBlock;
}

const emojiHandler = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.setHeader('content-type', 'text/html');

  if (req.url.includes('emoji')) {
    console.log('im in emojiapp');

    if (url.searchParams.get('emoji')) {
      const emoji = url.searchParams.get('emoji');
      const emojis = JSON.parse(fs.readFileSync('./src/emojiapp/emoji.json', 'utf8'));
      const cont = getHtml(`<img src="${emojis[emoji]}">`)
      res.end(cont);
      return true;
    }

    const content = html('./src/emojiapp/emoji.json');
    res.end(content);
    return true;
  }
  return false;
};

module.exports = { emojiHandler };
