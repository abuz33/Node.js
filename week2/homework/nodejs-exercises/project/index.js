const express = require('express');
const exphbs = require('express-handlebars');
const port = process.argv.PORT || 3500;

const app = express();

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/weather', (req, res) => {
  const cityName = req.body.cityName;
  res.render('index', {
    cityName
  })
});

app.listen(port);