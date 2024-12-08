const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf-8')
const demoInput = fs.readFileSync('./demo-input.txt', 'utf-8')

// ============================== Part 1 ============================== //

// takes a string, and returns the number of times XMAS appears forward and backward
function xmasSearch(line: string) {
  let xmasCount = 0
  const forward = line.match(/XMAS/g)
  const backward = line.match(/SAMX/g)
  if (forward !== null) xmasCount += forward.length
  if (backward !== null) xmasCount += backward.length

  return xmasCount
}

// horizontal lines
const horizontalArr: string[] = demoInput.trim().split('\n')
const horizontalCount = horizontalArr.reduce((total: number, line: string) => {
  return xmasSearch(line) + total
}, 0)

// vertical lines
const verticalArr: string[] = []
// create vertical lines
// first loop, goes through each horizontal line
for (let i = 0; i < horizontalArr.length; i++) {
  // second loop goes through each character
  for (let j = 0; j < horizontalArr[0].length; j++) {
    if (i === 0) {
      verticalArr.push(horizontalArr[i].charAt(0))
    } else {
      verticalArr[j] = verticalArr[j] + horizontalArr[i].charAt(j)
    }
  }
}
const verticalCount = verticalArr.reduce((total: number, line: string) => {
  return xmasSearch(line) + total
}, 0)

// downRight diagonal lines
const downRightArr: string[] = []

// upRight diagonal lines
const upRightArr: string[] = []
for (let i = 0; i < horizontalArr.length + verticalArr.length - 1; i++) {
  upRightArr.push()
}

console.log(horizontalCount)
console.log(verticalCount)

// -- Part 1 Solved -- //

// ============================== Part 2 ============================== //

// -- Part 2 Solved -- //
