import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import template from './template';

const server = express();

server.use('/assets', express.static('assets'));

server.get('/', function (req, res) {
  const appString = renderToString(<App />);

  res.send(template({
    body: appString,
    title: 'Tic Tac Toe'
  }));
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
