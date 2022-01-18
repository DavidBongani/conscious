// BASE SETUP
//==============================================================

// call the packages we need
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const edLevelRoute = require('./routes/edLevelRoute');
const hostname = 'localhost';
const port = 3000;

// configure app to use bodyParser()
// this will let us get data from a POST
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// ROUTES FOR OUR API
//=================================================================

app.use('/edLevel', edLevelRoute);
// folder in which static files will stored on
app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

// START THE SERVER
//=================================================================
const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
