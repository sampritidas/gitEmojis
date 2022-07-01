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
};

const getHtml = (links) => {
  return `<html>${head()}<body>${links}</body></html>`;
};

const html = (content) => {
  const links = Object.keys(content).map((key) => {
    return `<img src="${content[key]}" title=${key}>${key}</img>`;
  });
  const htmlBlock = getHtml(links.join('\n'));
  return htmlBlock;
};

module.exports = { html, getHtml };
