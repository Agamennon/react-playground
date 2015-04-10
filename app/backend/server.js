var express = require('express');
var app = express();
var path = require('path');
var r = require ('rethinkdb');
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); // for parsing multipart/form-data



var conn;
require('./rethinkdb')(r).then(function(data){
    conn = data;
    //   console.log(data);
},function(error){
    console.log(error);
});


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
    res.send('i live again and again fuck yeah');
});


function getAllComments (){
    return new Promise(function(resolve,reject){

        r.db('tutorial').table('comments').run(conn, function(err, cursor) {
            if (err){
                reject(Error(err));
            }else{
                cursor.toArray(function(err, result) {
                    if (err){
                        reject(Error(err));
                    } else{
                        resolve(result);
                    }
                    //   console.log(JSON.stringify(result, null, 2));
                });
            }

        });
    });

}

app.delete('/comments/:id',function(req,res){
    var id = req.params.id;
    r.db('tutorial').table('comments').get(id).delete().run(conn,function(err,data){
        res.send(err||data);
    });


});

app.get('/comments', function (req, res) {

    getAllComments().then(
        function(result){
            setTimeout(function(){
                res.send(result);
            },2000);

        },
        function(error){
            console.log(error);
        }
    );


 /*   r.db('tutorial').table('comments').run(conn, function(err, cursor) {
        if (err) throw err;
        cursor.toArray(function(err, result) {
            if (err) throw err;
            res.send(result);

        });
    });*/

});


app.post('/comments', function (req, res) {

   // console.log(req);
    r.db('tutorial').table('comments').insert(req.body).run(conn, function(err, result) {
        if (err) throw err;
      //  console.log(JSON.stringify(result, null, 2));
        getAllComments().then(function(data){
            res.send(data);
        });
        //res.send(result);

    });

});



var server = app.listen(7979, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});