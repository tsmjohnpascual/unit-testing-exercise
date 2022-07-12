// Write a program that prints the numbers from 1 to 100
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”
// For numbers which are multiples of both three and five print “FizzBuzz”

const fizzBuzz = (number) => {

    if (Number.isFinite(number)) {
        if (number % 3 == 0 && number % 5 == 0) {
            return "FizzBuzz"
        } else if (number % 3 == 0) {
            return "Fizz"
        } else if (number % 5 == 0) {
            return "Buzz"
        } else {
            return number
        }
    } else {
        throw "Error: input is not a number"
    }

}

// console.log(fizzBuzz(10)) //output should be Buzz
// console.log(fizzBuzz(12)) //output should be Fizz
// console.log(fizzBuzz(15)) //output should be FizzBuzz
// console.log(fizzBuzz(16)) //outpout should be 16

module.exports = fizzBuzz