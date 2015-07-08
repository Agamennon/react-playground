
module.exports = function (r,app,conn){

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
                },0);

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

    var validation = require('../app/common/validate.js');
    app.post('/comments', function (req, res) {
        validation.validate('hahah');
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
};

