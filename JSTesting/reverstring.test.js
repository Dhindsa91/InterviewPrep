const reverseString = require('./reversestring')

test('reverstring function exists', () => {
    expect(reverseString).toBeDefined()
})

test('String reverse', () => {
    expect(reverseString('hello')).toEqual('olleh')
})