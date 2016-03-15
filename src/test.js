var assert = require('assert');
var Deprecated = require('./index');
Deprecated.printMessage();

assert(Deprecated.isDeprecated('deprecated.js'), 'should be deprecated');
