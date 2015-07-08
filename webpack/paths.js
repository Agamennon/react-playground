var path = require('path');
var root =  path.resolve(__dirname, '..');
module.exports = {
      root:root,
      app:path.resolve(root, 'app'),
      node: path.resolve(root, 'node_modules'),
      build: path.resolve(root, 'public', 'build')
};
