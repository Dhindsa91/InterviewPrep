const chunkArray = require('./chunk')


test("test to see if it exists", () => {
    expect(chunkArray).toBeDefined()
})

test('Chunk an array of 10 values with length of 2', () => {
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const length = 2;
    var chunkedArr = chunkArray(num, length)
    expect(chunkedArr).toEqual([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 10]
    ])
})