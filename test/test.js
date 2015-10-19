var should = require('should');
var mocha = require('mocha');

describe('logger', function () {
  it('should be a function', function () {
    //assuming dlog correctly exports
    var logger = require('../index.js');
    
    logger.should.type('function');
  });
});
