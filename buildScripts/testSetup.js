//This file isn't transpiled,so must be commonJS and ES5

//register babel to transpile  before our test run
require('babel-register')();

//disable webpack features  that Mocha doesn't understand

require.extensions['.css'] = function () {};