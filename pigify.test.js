const assert = require('assert');
const pigify = require('../pigify');
const expect = require('chai').expect;
const should = require('chai').should()

describe('Pig Latin Translator', function() {
    it('should return a string', function() {
       result = pigify('test')
       expect(result).to.be.a('string');
    })

    it('should return a string ending in "ay"', function() {
        var result = pigify('test');
        var ending = result.slice(result.length - 2)
        ending.should.equal('ay')
    })

    it('should return a string that starts with a vowel', function() {
        var result = pigify('test');
        var firstChar = result[0]
        var vowels = ['a', 'e', 'i', 'o', 'u']
        expect(vowels).to.include(firstChar)
    });

    describe('Starting consonant clusters', function() {
        it('should turn "java" into "avajay"', function() {
            expect(pigify('java')).to.equal('avajay')
        })
        it('should turn "glove" into "oveglay"', function() {
            expect(pigify('glove')).to.equal('oveglay')
        });
        
        it('should turn "stamp" into "ampstay"', function() {
            expect(pigify('stamp')).to.equal('ampstay')
        });
        
        it('should turn "schedule" into "eduleschay"', function() {
            var result = pigify("schedule");
            expect(result).to.equal('eduleschay')
        });
    });

    describe('Starting vowels', function() {
        it('should turn "echo" into "echoyay"', function() {
            expect(pigify('echo')).to.equal('echoyay')
        });
        it('should turn "absent" into "absentyay"', function() {
            var result = pigify('absent');
            expect(result).to.equal('absentyay');
        });
        it('should turn "orange" into "orangeyay"', function() {
            var result = pigify('orange');
            expect(result).to.equal('orangeyay')
        })
    })
})