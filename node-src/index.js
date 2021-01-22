const express = require('express');
const Twig = require('twig');
const app = express();
const port = 9000;

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

app.get('/', (req, res) => {
  console.log('HELLO DAMNIT');
  res.send('Hello papi');
});
