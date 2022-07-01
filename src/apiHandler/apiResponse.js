const fs = require('fs');
const https = require('https');
const options = {
  headers: {
    'User-Agent': 'Sampriti'
  }
}

const getApiResponse = (filename) => {
  https.get('https://api.github.com/emojis', options, (res) => {
    let rawData = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        fs.writeFileSync(filename, JSON.stringify(parsedData), 'utf8');
      } catch (e) {
        console.error(e.message);
      }
    });
  });
}

module.exports = { getApiResponse };
