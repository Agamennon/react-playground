var webpack = require('webpack');

module.exports = function(mode,port,dev_port){

    var webpackFile;
    switch (mode){
        case 'development':  webpackFile = './development.js'; break;
        case 'hot':  webpackFile = './hot.js'; break;
        case 'production': webpackFile ='./production.js'; break;
        case 'test': webpackFile ='./test.js'; break;
    }

    var bundleStart = null;
    var compiler = webpack(require(webpackFile)(dev_port));

    compiler.plugin('compile', function() {
        bundleStart = Date.now();
    });
    compiler.plugin('done', function() {
        console.log('Bundled em ' + (Date.now() - bundleStart) + 'ms!');
    });

    if (mode !== 'production'){
        var WebpackDevServer = require('webpack-dev-server');
        var bundler = new WebpackDevServer(compiler, {
            publicPath: '/build/',
            proxy: { "*": 'http://localhost:'+port},
            hot: true,
            quiet: false,
            noInfo: true,
            stats: {
                progress:true,
                colors: true
            }
        });
        bundler.listen(dev_port, 'localhost', function () {
            console.log('Aguarde...');
        });
    }else {
        compiler.run(function(err, stats) {
        });
    }

};



