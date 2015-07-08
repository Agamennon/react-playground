var webpack = require('webpack');
var _ = require('lodash');
var cfg =  require('./base.js');


module.exports = function(dev_port) {

//cfg.devtool = 'cheap-module-eval-source-map';
    cfg.devtool = 'eval';

    cfg.entry.app = _.union([
        'webpack-dev-server/client?http://localhost:'+dev_port,
        'webpack/hot/dev-server'
    ],cfg.entry.app);

    cfg.plugins = _.union([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],cfg.plugins);

    cfg.module.loaders[0].loaders.unshift('react-hot');

    return cfg;
};


//module.exports = cfg;

