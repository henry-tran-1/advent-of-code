const { log } = require('console')
const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'utf-8')
const demoInput = fs.readFileSync('./demo-input.txt', 'utf-8')

// ============================== Part 1 ============================== //

let safeTotal = 0

// separate into array of reports
const reports = input.split('\n')

reports.forEach((report) => {
  // split each report into an array of its levels
  const reportArr = report.split(/\s+/)

  // already deemed unsafe
  if (reportArr[0] - reportArr[1] === 0) {
    return
  }
  // levels should all be increasing
  else if (reportArr[0] - reportArr[1] < 0) {
    let flag = true
    for (let i = 0; i < reportArr.length - 1; i++) {
      // checks the levels are always increasing
      const levelDiff = reportArr[i] - reportArr[i + 1]
      if (levelDiff < -3 || levelDiff > -1) {
        flag = false
        break
      } else continue
    }
    // only reaches this condition if the difference between successive levels is always positive 1 - 3
    if (flag === true) safeTotal += 1

    // levels should all be decreasing
  } else {
    let flag = true
    for (let i = 0; i < reportArr.length - 1; i++) {
      // checks the levels are always decreasing
      const levelDiff = reportArr[i] - reportArr[i + 1]
      if (levelDiff < 1 || levelDiff > 3) {
        flag = false
        break
      } else continue
    }
    // only reaches this condition if the difference between successive levels is always negative 1 - 3
    if (flag === true) safeTotal += 1
  }
})

console.log('Solution to Part 1:', safeTotal)
// -- Part 1 Solved -- //

// ============================== Part 2 ============================== //

let safeTotalDampened = 0

reports.forEach((report) => {
  fullReport = report.split(/\s+/)

  // per report, creates a partial report for each removed level
  for (let i = 0; i < fullReport.length; i++) {
    partialReport = [...fullReport]
    partialReport.splice(i, 1)

    // levels should all be increasing
    if (partialReport[0] - partialReport[1] < 0) {
      let flag = true
      for (let i = 0; i < partialReport.length - 1; i++) {
        // checks the levels are always increasing
        const levelDiff = partialReport[i] - partialReport[i + 1]
        if (levelDiff < -3 || levelDiff > -1) {
          flag = false
          break
        }
      }
      // only reaches this condition if the difference between successive levels is always positive 1 - 3
      if (flag === true) {
        safeTotalDampened += 1
        break
      }

      // levels should all be decreasing
    } else if (partialReport[0] - partialReport[1] > 0) {
      let flag = true
      for (let i = 0; i < partialReport.length - 1; i++) {
        // checks the levels are always decreasing
        const levelDiff = partialReport[i] - partialReport[i + 1]
        if (levelDiff < 1 || levelDiff > 3) {
          flag = false
          break
        }
      }
      // only reaches this condition if the difference between successive levels is always negative 1 - 3
      if (flag === true) {
        safeTotalDampened += 1
        break
      }
    }
  }
})

console.log('Solution to Part 2:', safeTotalDampened)

// -- Part 2 Solved -- //
