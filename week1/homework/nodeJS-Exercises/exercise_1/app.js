const pad = require('./andrejs-awsome-function');

const numbers = ["12", "846", "2", "1236"];

numbers.forEach(number => {
  console.log(pad(number, 4, '_'));
})
