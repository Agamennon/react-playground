var webpack = require('webpack');
var path = require('path');
var p = require('./paths.js');

module.exports = {
    context: p.root,
    entry: {
        app: [
            path.resolve(p.app, 'src','main.js')
        ],
        vendors:['react/addons','react-router']
    },
    output: {
        path: p.build,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?optional=runtime&stage=2'],
                exclude: [p.node,p.build]
            },
            {
                test: /\.css$|scss/,
                loader: 'style!css!sass'
            },
            {
                test: /\.json/,
                loader: 'json'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new webpack.ProvidePlugin({  //qualquer hora que usar React ele preenche com require ('react/addons');
            "React": "react/addons",   //http://stackoverflow.com/questions/23305599/webpack-provideplugin-vs-externals
            "Router": "react-router",
            "Radium": "radium",
            "color": "color",
            "classnames": 'classnames',
            "sa": "superagent",
            "Showdown": "showdown",
            "Reflux":"reflux",
            "_": "lodash"
        })

    ]
};
