var express = require('express');
var app = express();
var path = require('path');

//app.use('/build', express.static(__dirname+'/build'));
app.use('/build', express.static(path.join(__dirname ,'../build')));
//console.log( path.join(__dirname ,'../build'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname ,'../index.html'));
});



app.get('/vai', function(req, res){
   console.log('eu fui');
});

app.get('/teste', function (req, res) {
    var x  = req.session;
    res.send('i live again and again fuck yeahaaaaaaaaaaaaaaaaa');
});



var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});