const express = require('express');

const PORT = process.env.PORT || 3000;

const server = express()
  .get('/', (req, res) => res.send('hello!'))
  .listen(PORT, () => console.log(`slackk listening on port ${PORT}`)); // eslint-disable-line no-console

module.exports = server;
