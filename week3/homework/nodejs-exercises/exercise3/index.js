const express = require('express');

const fetch = require('node-fetch');
const app = express();

const body = {
  name: "John Doe",
  numberOfPeople: 3
};

app.get('/', (req, res) => {
  fetch("https://reservation100-sandbox.mxapps.io/rest-doc/api", {
    method: 'post',
    body: {
      "name": "Abuzer ALACA",
      "numberOfPeople": 15
    },
    headers: { "Content-Type": "application/json" },
  })
    .then(res => res.text())
    .then(text => {
      console.log(text);
      res.send(text);
    })
    .catch(err => res.send(err));
});

app.listen(3200, () => console.log(`Server started at 3200`));
 
