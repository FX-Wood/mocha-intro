const assert = require('assert');

describe('Our first Mocha Test', function() {
    it('length prop should be the length of the string', function() {
        assert.equal('javascript'.length, 5);
    });
    it('charAt(0) should return first char of the string', function() {
        assert.equal("javascript".charAt(0), 'j');
    });
    
})