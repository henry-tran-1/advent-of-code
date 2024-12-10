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

function returnCount(arr: string[]) {
  return arr.reduce((total: number, line: string) => {
    return xmasSearch(line) + total
  }, 0)
}

// turn input into grid
const grid: string[][] = demoInput
  .trim()
  .split('\n')
  .map((line: string) => line.split(''))

// horizontal lines, don't need grid
const horizontalArr: string[] = input.trim().split('\n')
const horizontalCount = returnCount(horizontalArr)

// vertical lines
const verticalArr: string[] = []
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid.length; j++) {
    if (i === 0) {
      verticalArr.push(grid[i][j])
    } else {
      verticalArr[j] = verticalArr[j] + grid[i][j]
    }
  }
}
const verticalCount = returnCount(verticalArr)

// downRight diagonal lines
const downRightArr: string[] = []

// top half of downright diagonal
// outer loop for [0][0] to [0][9]
for (let i = 0; i < grid[0].length; i++) {
  let row = 0
  let col = i
  let diagonal = ''
  while (row < grid.length && col >= 0) {
    diagonal += grid[row][col]
    row += 1
    col -= 1
  }
  downRightArr.push(diagonal)
}
// bottom half of downright diagonal
// outer loop for [1][9] to [9][9]
for (let i = 1; i < grid.length; i++) {
  let row = i
  let col = grid.length - 1
  let diagonal = ''
  while (row < grid.length && col >= 0) {
    diagonal += grid[row][col]
    row += 1
    col -= 1
  }
  downRightArr.push(diagonal)
}
const downRightCount = returnCount(downRightArr)

// upRight diagonal lines
const upRightArr: string[] = []

// top half of upRight diagonal
// outer loop for [0][0] to [0][9]
for (let i = 0; i < grid[0].length; i++) {
  let row = 0
  let col = i
  let diagonal = ''
  while (row < grid.length && col < grid[0].length) {
    diagonal += grid[row][col]
    row += 1
    col += 1
  }
  upRightArr.push(diagonal)
}
// bottom half of upRight diagonal
// outer loop for [1][0] to [9][0]
for (let i = 1; i < grid.length; i++) {
  let row = i
  let col = 0
  let diagonal = ''
  while (row < grid.length && col < grid[0].length) {
    diagonal += grid[row][col]
    row += 1
    col += 1
  }
  upRightArr.push(diagonal)
}
const upRightCount = returnCount(upRightArr)

const totalCount =
  horizontalCount + verticalCount + downRightCount + upRightCount

console.log('Solution to Part 1: ', totalCount)
// -- Part 1 Solved -- //

// ============================== Part 2 ============================== //

// downRightArr and upRightArr
// search through diagonal lines for M-A-S or S-A-M
// then note down grid[x][y] of the 'A'
// then search through the opposite diagonal line, and check if that A has either M-A-S or S-A-M

function crossMasSearch() {}

console.log('UR', upRightArr)
console.log('DR', downRightArr)

// -- Part 2 Solved -- //
