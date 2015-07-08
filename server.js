
var express = require('express');
var path = require('path');
var http = require('http');
var app = express();

const mode = process.env.NODE_ENV || 'development';
const root = __dirname;

require('./server/configurations.js')(app,mode,root);

var server = http.createServer(app);

const port = 3000;
const dev_port = 4000;

server.listen(port, function () {
    var bundle = require('./webpack/build.js');
    console.log('Server running, mode '+mode+', on port ' + ((mode === 'production') ? port : dev_port).toString());
    bundle(mode,port,dev_port);
});
