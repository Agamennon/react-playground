
module.exports  = function(r){
    console.log('rethink');
 //   var connection = null;
  /*  return r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
        if (err) throw err;
       return connection = conn;
    })*/

    return r.connect( {host: 'localhost', port: 28015});
};