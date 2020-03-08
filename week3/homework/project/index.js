const express = require('express');
const exphbs = require('express-handlebars');
const axios = require('axios');

const APIKEY = require("./sources/keys.json").API_KEY;
const port = process.argv.PORT || 3500;

const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  

  if (cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?APPID=${APIKEY}&q=${cityName}&units=metric`;
    axios
      .get(url)
      .then(response => {
        res.render("index", { weatherText: `The Temperature in ${cityName} is ${response.data.main.temp}`});
      })
      .catch(() => res.render("index", { weatherText: "City is not found" }));
  } else {
    res.status(400).render("index", { weatherText: 'Bad Request' });
  }
});

app.listen(port, () => console.log(`Server started at port ${port}`));