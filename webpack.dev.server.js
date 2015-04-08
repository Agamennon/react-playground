var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.base.config');


config.entry.app.unshift('webpack-dev-server/client?http://localhost:4000');

config.plugins.push(new webpack.NoErrorsPlugin());
config.plugins.push(new webpack.SourceMapDevToolPlugin('[file].map', null,"[absolute-resource-path]", "[absolute-resource-path]"));


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    contentBase: "app/"

}).listen(4000, 'localhost', function (err, result) {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:4000');
    });
