const express = require('express');
const Twig = require('twig');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
  Twig.renderFile('../templates/index.twig', { name: 'lele' }, (err, html) => {
    res.send(html);
  });
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
