const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf-8')
const demoInput = fs.readFileSync('./demo-input.txt', 'utf-8')

// ============================== Part 1 ============================== //

const instructions = input.match(/mul\(\d{1,3},\d{1,3}\)/g)

const sumInstructions = instructions.reduce((total, currentValue) => {
  const numbers = currentValue.match(/\d{1,3}/g)
  return total + Number(numbers[0]) * Number(numbers[1])
}, 0)

console.log('Solution to Part 1:', sumInstructions)

// -- Part 1 Solved -- //

// ============================== Part 2 ============================== //

// -- Part 2 Solved -- //
