var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var bower_dir = path.join(__dirname, 'bower_components');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {

    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:4000',
            'webpack/hot/only-dev-server',
          //  './app/src/AppComponent.js'
                './app/src/main.js'
        ]
   //     vendors:['react']
    },

    output: {
        path: __dirname + '/app/build',
        filename: 'bundle.js',
        publicPath: '/build/'
    },


    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
 /*       new webpack.SourceMapDevToolPlugin(
            '[file].map', null,
            "[absolute-resource-path]", "[absolute-resource-path]")*/
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']

    },
    module: {
        noParse: [],
        loaders: [{
            test: /\.jsx|.js?$/,
            exclude: /node_modules/,
            loaders: ['react-hot','babel-loader?optional=runtime&stage=1'],
            include: path.join(__dirname, 'app/src')
        }]
    }
};


new WebpackDevServer(webpack(config), {
    publicPath: '/build/',
    proxy: { "*": 'http://localhost:8080' },

//     contentBase: {target: 'http://localhost:8080'},

    //   publicPath: config.output.publicPath,

    hot: true
    //   historyApiFallback: true
}).listen(4000, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }

        console.log('Listening at localhost:4000');
    });



module.exports = config;

