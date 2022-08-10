module.exports = function reverse(n) {
    return `${n}`.split('').reverse().filter(item => !Number.isNaN(+item)).join('')
}
