const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf-8')
const demoInput = fs.readFileSync('./demo-input.txt', 'utf-8')

// ============================== Part 1 ============================== //
let listLeft = []
let listRight = []
let distance = 0

// separate input into 2 ordered arrays (listLeft and listRight)
input
  .split('\n')
  .map((string) => string.split('   '))
  .forEach((line) => {
    listLeft.push(line[0])
    listRight.push(line[1])
  })

listLeft.sort()
listRight.sort()

// sums up the absolute difference between the corresponding numbers in each list
for (let i = 0; i < listLeft.length; i++) {
  distance += Math.abs(listLeft[i] - listRight[i])
}

// -- Part 1 Solved -- //
console.log('Solution to Part 1:', distance)

// ============================== Part 2 ============================== //
let similarity = 0

// loops through every number on left list
listLeft.forEach((leftNumber) => {
  // finds how many times this number appears on the right list
  const matchCount = listRight.filter((rightNumber) => {
    return leftNumber === rightNumber
  }).length
  // multiples the left list number with how many times it appears on the right, and adds to similarity total
  similarity += leftNumber * matchCount
})

// -- Part 2 Solved -- //
console.log('Solution to Part 2:', similarity)
