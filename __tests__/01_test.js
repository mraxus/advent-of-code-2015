const { func1, func2 } = require('../01')

describe('Day 1', () => {
  const partOne = [
    { input: '(())', result: 0 },
    { input: '(((', result: 3 },
    { input: '))(((((', result: 3 },
    { input: '())', result: -1 },
    { input: ')))', result: -3 },
    { input: '()()', result: 0 },
    { input: '(()(()(', result: 3 },
    { input: '))(', result: -1 },
    { input: ')())())', result: -3 },
  ]

  const partTwo = [
    { input: ')', result: 1 },
    { input: '()())', result: 5 },
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 (which floor) with input "${input}" to be ${result}`, () => {
      expect(func1(input)).toBe(result)
    })
  })

  partTwo.forEach(({input, result}) => {
    test(`Part 2 (first time in basement) with input "${input}" to be ${result}`, () => {
      expect(func2(input)).toBe(result)
    })
  })
})
