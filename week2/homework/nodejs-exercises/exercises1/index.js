const express = require('express');
const fs = require("fs");
const path = require('path');

const app = express();

const port = process.argv.PORT || 3200;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Success');
});

app.post('/blogs', (req, res) => {
  
  // How to get the tile and content from the request??
  const { title, content } = req.body;

  fs.writeFileSync(path.join(__dirname, "posts" ,title), content);
  res.end('ok');
});

app.put('/blogs', (req, res) => {
  // How to get the tile and content from the request??
  const { title, content } = req.body;

  if (fs.existsSync(path.join(__dirname, "posts",  title))) {
    fs.writeFileSync(path.join(__dirname, "posts",  title) , content);
    res.end('ok')
  } else {
    res.end('post does not exist');
  }
});

app.delete('/blogs/:title', (req, res) => {
  // How to get the tilte from the url parameters?
  const title = req.params.title;
  if (fs.existsSync(path.join(__dirname, "posts", title))) {
    fs.unlinkSync(path.join(__dirname, "posts", title));
    res.end("ok");
  } else {
    res.end("post does not exist");
  }
});

app.get('/blogs/:title', (req, res) => {
  // How to get the tilte from the url parameters?
  const title = req.params.title;

  res.sendFile( path.join(__dirname,'posts', title),
    {
      headers: {
        'Content-Type': 'text/plain'
      }
    }
);
});

app.listen(port, () => console.log(`Server is started at the port ${port}.`));