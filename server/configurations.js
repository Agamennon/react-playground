module.exports = function(app,mode,root){

    var express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      multer = require('multer'),
      r = require ('rethinkdb');

    app.use(bodyParser.json()); // for parsing application/json
    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
    app.use(multer()); // for parsing multipart/form-data
    app.use(express.static(path.resolve(root, 'public')));


    var conn = '';
    r.connect( {host: 'localhost', port: 28015}).then(function(data){
         conn = data;
        require('./api')(r,app,conn);
    },function(error){
        console.log(error);
    });




};


