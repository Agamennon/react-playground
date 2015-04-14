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
        new webpack.ProvidePlugin({  //qualquer hora que usar React ele preenche com require ('react/addons');
            "React": "react/addons",   //http://stackoverflow.com/questions/23305599/webpack-provideplugin-vs-externals
            "Router": "react-router",
            "sa": "superagent"
        })

     /*   new webpack.ProvidePlugin({
            React: "react/addons",
            "window.React": "react/addons",
            Fluxxor: "fluxxor",
            $: "jquery",
            jQuery: "jquery",
            "windows.jQuery": "jquery"
        })*/

    ],
    externals : {
        showdown: "Showdown"
    },
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