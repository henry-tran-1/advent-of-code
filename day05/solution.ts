import * as fs from 'fs'

const input = fs.readFileSync('./input.txt', 'utf-8')
const demoInput = fs.readFileSync('./demo-input.txt', 'utf-8')

// ============================== Part 1 ============================== //

// create a rule object
interface Rule {
  before: number
  after: number
}

// function to parse input into an array of rule objects
function parseRules(input: string): Rule[] {
  const rulesArr = input.match(/\d\d\|\d\d/g)

  if (rulesArr !== null) {
    return rulesArr.map((stringRule: string) => {
      const before = Number(stringRule.split('|')[0])
      const after = Number(stringRule.split('|')[1])
      return { before, after }
    })
  } else return []
}

// function to parse input into an array of updates
// function parseUpdates(input: string) {
//   input.split('\n')
// }

console.log(demoInput.split("\n''\n"))

// -- Part 1 Solved -- //

// ============================== Part 2 ============================== //

// -- Part 2 Solved -- //
