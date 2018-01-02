const { func1, func2 } = require('../05')

describe('Day 05', () => {
  const partOne = [
    { input: 'ugknbfddgicrmopn', result: 1 },
    { input: 'aaa', result: 1 },
    { input: 'jchzalrnumimnmhp', result: 0 },
    { input: 'haegwjzuvuyypxyu', result: 0 },
    { input: 'dvszwmarrgswjxmb', result: 0 },
  ]

  const partTwo = [
    { input: 'qjhvhtzxzqqjkmpb', result: 1 },
    { input: 'xxyxx', result: 1 },
    { input: 'uurcxstgmygtbstg', result: 0 },
    { input: 'ieodomkazucvgmuy', result: 0 },
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 (nice strings) with input "${input}" to be ${result}`, () => {
      expect(func1(input)).toBe(result)
    })
  })

  partTwo.forEach(({input, result}) => {
    test(`Part 2 (nicer strings) with input "${input}" to be ${result}`, () => {
      expect(func2(input)).toBe(result)
    })
  })
})
