const express = require('express');
const path = require('path');
const app = express();

const PUBLIC_PATH = __dirname + '/client/public';

const PORT = 3000;

app.use(express.static("client/build"));

app.get('*', function(req, res) {
  res.sendFile(path.join(PUBLIC_PATH, 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});