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
function parseUpdates(input: string) {
  const splitInput = input.split('\n')
  const emptyIndex = splitInput.findIndex((line) => line === '')
  const updatesBlock = splitInput.slice(emptyIndex + 1)
  return updatesBlock.map((line) => line.split(',').map(Number))
}

const rules = parseRules(input)
const updates = parseUpdates(input)

// create an array of only correctly ordered updates
const correctUpdates = updates.filter((update) => {
  // filter out irrelevant rules
  const relevantRules = rules.filter((rule) => {
    if (update.includes(rule.before && rule.after)) return rule
  })

  // in updates, find the index of all rules.before and rules.after
  // if in the correct order, then return true for the filter
  let flag = true
  relevantRules.forEach((rule) => {
    const before = update.indexOf(rule.before)
    const after = update.indexOf(rule.after)
    if (before !== -1 || after !== -1) {
      if (before > after) {
        flag = false
      }
    }
  })
  if (flag === true) return update
})

const summedTotal = correctUpdates.reduce((total, update) => {
  const middleIndex = update.length / 2 - 0.5
  return total + update[middleIndex]
}, 0)

console.log('Solution to Part 1:', summedTotal)
// -- Part 1 Solved -- //

// ============================== Part 2 ============================== //

// -- Part 2 Solved -- //
