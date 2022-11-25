const express = require('express');
// const fs = require('fs');

const app = express();

app.get('/oculto', (req, res) => {
  const { name } = req.query;

  console.log(name);
  res.send(name)
})

app.listen(3030, () => {
  console.log(`App listening on port 3030`)
});