const reverseString = val =>
    val
    .split('')
    .reverse()
    .join('')


module.exports = reverseString;

console.log(reverseString("hello"))