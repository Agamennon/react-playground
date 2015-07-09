var webpack = require('webpack');
var _ = require('lodash');
var cfg =  require('./base.js');


module.exports = function(dev_port) {

//cfg.devtool = 'cheap-module-eval-source-map';
    cfg.devtool = 'eval';

    cfg.entry.app = _.union([
        'webpack-dev-server/client?http://localhost:'+dev_port,
        'webpack/hot/only-dev-server'
    ],cfg.entry.app);

    cfg.plugins = _.union([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],cfg.plugins);

    cfg.module.loaders[0].loaders[0] = cfg.module.loaders[0].loaders[0]  + '&plugins[]=babel-plugin-react-hotify';
    return cfg;
};


