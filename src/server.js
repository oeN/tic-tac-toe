import express from 'express';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

const server = express();

server.get('/', function (req, res) {
  res.send('Hello World!');
});

server.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
