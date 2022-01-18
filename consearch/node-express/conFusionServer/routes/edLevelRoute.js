const express = require('express');
const bodyParser = require('body-parser');

// ROUTES FOR OUR API
//==========================================================
const edLevelRoute = express.Router();

edLevelRoute.use(bodyParser.json());

// all our routes will be prefixed with /edLevel
//---------------------------------------------------------
edLevelRoute.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the education levels to you');
})
.post((req,res,next) => {
    res.end('Will add the education levels: ' + req.body.name +
     ' with details: ' + req.body.description);
})
.put( (req,res,next) => {
    res.status = 403;
    res.end('PUT operation not supported on /edLevel');
})
.delete((req,res,next) => {
    res.end('Deleting all the education levels!');
});

// all our routes will be prefixed with /edLevel/primary
//------------------------------------------------------------
edLevelRoute.route('/primary')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of primary education: ' + req.params.primary + ' to you');
})
.post((req,res,next) => {
    res.end('Will add to the primary education: ' + req.body.name +
     ' with details: ' + req.body.description);
})
.put( (req,res,next) => {
    res.status = 403;
    res.end('PUT operation not supported on /primary');
})
.delete((req,res,next) => {
    res.end('Deleting all the primary data!');
});

// all our routes will be prefixed with /edLevel/secondary
//------------------------------------------------------------
edLevelRoute.route('/secondary')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of secondary education: ' + req.params.secondary + ' to you');
})
.post((req,res,next) => {
    res.end('Will add to the secondary education: ' + req.body.name +
     ' with details: ' + req.body.description);
})
.put( (req,res,next) => {
    res.status = 403;
    res.end('PUT operation not supported on /secondary');
})
.delete((req,res,next) => {
    res.end('Deleting all the secondary data!');
});

// all our routes will be prefixed with /edLevel/tertiary
//------------------------------------------------------------
edLevelRoute.route('/tertiary')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of tertiary education: ' + req.params.tertiary + ' to you');
})
.post((req,res,next) => {
    res.end('Will add to the tertiary education: ' + req.body.name +
     ' with details: ' + req.body.description);
})
.put( (req,res,next) => {
    res.status = 403;
    res.end('PUT operation not supported on /tertiaryy');
})
.delete((req,res,next) => {
    res.end('Deleting all the tertiary data!');
});


module.exports = edLevelRoute;