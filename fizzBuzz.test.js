const each = require("jest-each").default
const fizzBuzz = require("./fizzBuzz")

describe("fizzBuzz", () => {

    test("It is a function", () => {
        expect(typeof fizzBuzz).toBe("function")
    })

    describe("It reports invalid inputs correctly", () => {

        test("It throws an error if the input is not a number", () => {

            expect(() => {
                fizzBuzz(NaN)
            }).toThrow("Error: input is not a number")
            
        })

    })

    describe("It handles normal inputs correctly", () => {

        each([
            [10, "Buzz"],
            [12, "Fizz"],
            [15, "FizzBuzz"],
            [16, 16],
        ]).test("%s -> %s", (arr, expected) => {
            expect(fizzBuzz(arr)).toEqual(expected)
        })

    })

})