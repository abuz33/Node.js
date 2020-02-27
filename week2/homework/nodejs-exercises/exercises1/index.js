const express = require('express');
const fs = require("fs");

const app = express();

const port = process.argv.PORT || 3200;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Success');
});

app.post('/blogs', (req, res) => {
  
  // How to get the tile and content from the request??
  const { title, content } = req.body.title;

  fs.writeFileSync(title, content);
  res.end('ok');
});

app.put('/blogs', (req, res) => {
  // How to get the tile and content from the request??
  const { title, content } = req.body.title;

  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end('ok')
  } else {
    res.end('post does not exist');
  }
});

app.delete('/blogs/:title', (req, res) => {
  // How to get the tilte from the url parameters?
  const title = req.params.title;

  fs.unlinkSync(title);
  res.end('ok');
});

app.get('/blogs/:title', (req, res) => {
  // How to get the tilte from the url parameters?
  const title = req.params.title;

  res.sendfile(title);
});

app.listen(port, () => console.log(`Server is started at the port ${port}.`));