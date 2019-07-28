const func = require('./functions')

test('this is going to add two numbers', () => {
    expect(func.add(2, 2)).toBe(4)
})

test('this is going to add two numbers NOT GOING TO WORK', () => {
    expect(func.add(2, 2)).not.toBe(5);
})


test('Null Test', () => {
    expect(func.isNull()).toBeNull()
})

//toBeFalsy
test('Functions Check value Test', () => {
    expect(func.checkValue(undefined)).toBeFalsy()
})

//toStrictEqual
test('Create User function', () => {
    expect(func.createUser()).toStrictEqual({
        firstName: "Arvind",
        lastName: "Dhindsa"
    })
})

// toBeLessThan
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})


//! to Match
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

// toContain
test('Admin should be in username ', () => {
    usernames = ['john', 'karen', 'admin']

    expect(usernames).toContain('admin')
})