const fetch = require('node-fetch');

const url = 'https://api.icndb.com/jokes/random';

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.value['joke']));