function pigify(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u']
    
    if (vowels.includes(str[0])) {
        return str + "yay"
    }

    var leadingConsonants = ''
    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return str.slice(i) + leadingConsonants + 'ay'
        } else {
            leadingConsonants += str[i]
        }
    }
}








module.exports = pigify