let http = require('http');
let fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  

  if (req.url === '/script.js') { 
    // res.write(`document .getElementById('content') .appendChild(document.createTextNode('Welcome to Server-land!'))`);
    res.write(fs.readFileSync('script.js'));
  } else {
    res.write(`<html>
      <head>
        <title>My First Web Server</title>
      </head>
      <body>
        <h1>Hello, anyone there?</h1>
        <div id="content"></div>
        <script src="script.js"></script>
      </body>
    </html>`); //send a response back to the client  
  }
  res.end(); //end the response
});

server.listen(3000); //the server listens on port 3000