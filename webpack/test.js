var webpack = require('webpack');
var _ = require('lodash');
var base =  require('./base.js');



cfg.devtool = 'cheap-module-eval-source-map';

cfg.entry.app = _.union([
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server'
],cfg.entry.app);

cfg.plugins = _.union([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
],cfg.plugins);

cfg.module.loaders[0].loaders.unshift('react-hot');

module.exports = cfg;

