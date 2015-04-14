var path = require('path');
var webpack = require('webpack');
var config = {

    entry: {
        app: [
            './app/src/main.js'
       //     './app/src/AppComponent.js'
        ]
 //       vendors:[]
    },
  //  devtool:'eval',
    output: {
        path: __dirname + '/app/build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [

    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    //    alias:{}
    },
    module: {
        noParse: [],
        loaders: [{
//            test: /\.jsx?$/,
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader?optional=runtime&stage=1'],
            include: path.join(__dirname, 'app/src')
        }]
    }
};

module.exports = config;