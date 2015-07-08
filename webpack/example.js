var Webpack = require('webpack');
var path = require('path');
var appPath = path.resolve(__dirname, '..', 'app');
var nodeModulesPath = path.resolve(__dirname, '..', 'node_modules');
var buildPath = path.resolve(__dirname,'..',  'public', 'build');

module.exports =  {
    devtool:'source-map',
    context: __dirname,
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/dev-server',
        path.resolve(appPath, 'main.jsx')
    ],
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        noParse: [
        ],
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            exclude: [nodeModulesPath,buildPath]
        }, {
            test: /\.css$|scss/,
            loader: 'style!css!sass'
        }]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        alias: {
            //      'react/addons': 'react/dist/react-with-addons.min.js'
            //      ,'react-router': 'react-router/umd/ReactRouter.min.js'
        },
        extensions: ['', '.jsx', '.js']
    },


    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.ProvidePlugin({  //qualquer hora que usar React ele preenche com require ('react/addons');
            "React": "react/addons",   //http://stackoverflow.com/questions/23305599/webpack-provideplugin-vs-externals
            "Router": "react-router",
            "classnames": 'classnames',
            "sa": "superagent",
            "Reflux":"reflux",
            "_": "lodash"
        })
    ]
};

