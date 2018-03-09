var http = require("http");
var express = require('express');

console.log('\n\n--- Node Version: ' + process.version + ' ---');

// Set up express routing
var app = express()
    .use(express.static(__dirname + '/public'))
    .use(function(req, res) {
        console.log('Could not find handler for: ' + req.url);
        res.end('Could not find handler for: ' + req.url);
    })
    .use(function(err, req, res, next) {
        console.log('Error trapped by express: ' + err.message + ' : ' + err.stack);
        res.end('Error trapped by express: ' + err.message);
    });

// Start node server listening on specified port -----
http.createServer(app).listen(80);

console.log('HTTP server listening on port 80');