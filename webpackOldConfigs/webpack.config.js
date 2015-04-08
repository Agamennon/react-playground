var path = require('path');
var webpack = require('webpack');

var bower_dir = path.join(__dirname, 'bower_components');
var node_modules_dir = path.join(__dirname, 'node_modules');



//    'webpack/hot/dev-server',
//    'webpack-dev-webpack/client?http://localhost:4000',

//    'webpack-dev-server/client?http://0.0.0.0:4000',
//    'webpack/hot/only-dev-server',
//    'webpack/hot/only-dev-server',


//    'webpack/hot/dev-server',
//  'webpack-dev-server/client?http://localhost:4000',

var config = {

    addVendor: function (name, path) {
        this.resolve.alias[name] = path;
        this.module.noParse.push(new RegExp(path));
    },
    //devtool: 'eval',
   // devtool: 'source-map',
   // context: __dirname,
    entry: {
        app: [


            'webpack-dev-server/client?http://localhost:4000',

            'webpack/hot/only-dev-server',
            //      'webpack-dev-server',

            './app/src/AppComponent.js'
      //      './app/src/main.js'
        ],
        vendors:[]
      //  vendors:['react','react-router']
      //  vendors:['react']
    },

    output: {
        path: __dirname + '/app/build',
        filename: 'bundle.js',
        publicPath: '/build/'

    },


  /*   devServer: {
        publicPath: '/build/',
        hot:true
    },*/

    plugins: [

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.SourceMapDevToolPlugin(
            '[file].map', null,
            "[absolute-resource-path]", "[absolute-resource-path]")

  //      new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

    ],
    resolve: {
        modulesDirectories:['node_modules'],
        extensions: ['', '.js', '.jsx'],
        alias:{}
    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.jsx|.js?$/,
            exclude: /node_modules/,
            loaders: ['react-hot','babel-loader?optional=runtime&stage=1'],
         //   test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
         //   loaders: ['react-hot'],

     //       test: /\.jsx?$/,
       //     exclude: /node_modules/,
        //    loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'app/src')
        }]
    }
};


//config.addVendor('react', bower_dir + '/react/react.min.js');
//

//config.addVendor('react', bower_dir + '/react.min.js');
//config.addVendor('react', node_modules_dir + '/react/dist/react-with-addons.min.js');
//config.addVendor('react-router', node_modules_dir + '/react/dist/react.min.js');
//config.addVendor('react', node_modules_dir + '/react');
//config.addVendor('react-router', node_modules_dir + '/react-router');
//config.addVendor('react-router', bower_dir + '/react-router/build/global/ReactRouter.min.js');
//config.addVendor('react-router', bower_dir + '/react-router/build/global/ReactRouter.min.js');


module.exports = config;