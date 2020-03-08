const fetch = require('node-fetch');

const url = `https://restapiabasicauthe-sandbox.mxapps.io/api/books`;

fetch(url, {
  headers: {
    "Authorization": "Basic YWRtaW46aHZnWDhLbFZFYQ=="
  }
})
  .then(res => res.json())
  .then(data => console.log(data));