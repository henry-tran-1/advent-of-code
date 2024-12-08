const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf-8')
const demoInput = fs.readFileSync('./demo-input.txt', 'utf-8')

// ============================== Part 1 ============================== //

// function that solves Part 1
const summedInstructions = (input) => {
  // creates an array of 'instrucitons' that compose of the shape 'mul(digit(1-3),(digit(1-3)))'
  const instructions = input.match(/mul\(\d{1,3},\d{1,3}\)/g)

  if (instructions === null) {
    return 0
  } else {
    // extracts the numbers, converts them to numbers, multiply them together, and sums together the multipled values
    const sum = instructions.reduce((total, currentValue) => {
      const numbers = currentValue.match(/\d{1,3}/g)
      if (numbers !== null) {
        return total + Number(numbers[0]) * Number(numbers[1])
      } else return total
    }, 0)
    return sum
  }
}

console.log('Solution to Part 1:', summedInstructions(input))
// -- Part 1 Solved -- //

// ============================== Part 2 ============================== //

// split into sections, divided by "don't()"
// in each section, only look at the segment between "do() until don't()"
// if there are segments (e.g. several do()'s, then only keep the longest segment)
// use sum fn on all these segments
// head: use sum fn on the section from the start until the first "don't"
// tail: in the section after the last don't, look for the segment after do(), and use sum fn
// sum all 3 parts together

// realised the input was on several different lines.  split by linebreak, then rejoined.
const joinedInput = input.split('\n').join()

const splitDont = joinedInput.split("don't()")
// handling head section
const headSection = splitDont[0]
const headSum = summedInstructions(headSection)

// handling tail section
const tailSection = splitDont[splitDont.length - 1].match(/do\(\).*/g)

let tailSum
if (tailSection === null) {
  tailSum = 0
} else if (tailSection.length > 1) {
  tailSection.sort((a, b) => b.length - a.length)
  tailSum = summedInstructions(tailSection[0])
} else tailSum = summedInstructions(tailSection[0])

// handling middle section
const middleSection = splitDont.slice(1, -1)
const middleSegments = middleSection.map((section) => {
  const segments = section.match(/do\(\).*/g)
  if (segments === null) {
    return ''
  } else if (segments.length > 1) {
    segments.sort((a, b) => b.length - a.length)
    return segments[0]
  } else return segments[0]
})
let middleSum = 0
middleSegments.forEach((item) => {
  middleSum += summedInstructions(item)
})
const totalSum = headSum + tailSum + middleSum

console.log('Solution to Part 2:', totalSum)
// -- Part 2 Solved -- //
