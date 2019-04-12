const assert = require('assert');
const pigify = require('../pigify');

describe('Pig Latin Translator', function() {
    it('should return a string', function() {
        assert.equal(typeof pigify('test'), 'string');
    })
    it('should return a string ending in "ay"', function() {
        var result = pigify('test');
        assert.equal( result.slice(result.length -2), 'ay')
    })
    it('should return a string that starts with a vowel', function() {
        var result = pigify('test');
        var vowels = ['a', 'e', 'i', 'o', 'u']
        assert.equal(vowels.includes(result[0]), true)
    });
    
})