let myFunctions = require('./functions')

test('returnTwo should return 2', () => {
    expect(myFunctions.returnTwo()).toBe(2)
})

test('greeting should retuen the correct string', () => {
    expect(myFunctions.greeting('James')).toBe("Hello, James.")
})

test('add should sum the given params', () => {
    expect(myFunctions.add(1, 2)).toBe(3)
})

describe("Math functions", () => {
    test("add", () => {
        expect(myFunctions.add(10, 5)).toBe(15)
    })
    test("subtract", () => {
        expect(myFunctions.subtract(15, 10)).toBe(5)
    })
    test("multiply", () => {
        expect(myFunctions.multiply(7, 3)).toBe(21)
    })
    test("divide", () => {
        expect(myFunctions.divide(20, 4)).toBe(5)
    })
})