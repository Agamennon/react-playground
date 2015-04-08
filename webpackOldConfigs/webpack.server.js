var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: '/build/',
    proxy: { "*": 'http://localhost:8080' },

   // contentBase: {target: 'http://localhost:8080'},

 //   publicPath: config.output.publicPath,

     hot: true
  //   historyApiFallback: true
}).listen(4000, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }

        console.log('Listening at localhost:4000');
    });
