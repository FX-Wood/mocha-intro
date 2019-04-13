module.exports = function pigifyReduce(str) {
    leadingVowelIndex = str.search(/[aeiou]/)
    return str.slice(leadingVowelIndex) + str.slice(0, leadingVowelIndex) + (leadingVowelIndex !== 0 ? 'ay' : 'yay')
}