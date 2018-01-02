const { func1, func2 } = require('../02')

describe('Day 02', () => {
  const partOne = [
    { input: '2x3x4', result: 58 },
    { input: '1x1x10', result: 43 },
    { input: '10x1x1', result: 43 },
  ]

  const partTwo = [
    { input: '2x3x4', result: 34 },
    { input: '1x1x10', result: 14 },
    { input: '10x1x1', result: 14 },
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 (wrapping paper area) with input "${input}" to be ${result}`, () => {
      expect(func1(input)).toBe(result)
    })
  })

  partTwo.forEach(({input, result}) => {
    test(`Part 2 (feet of ribbon) with input "${input}" to be ${result}`, () => {
      expect(func2(input)).toBe(result)
    })
  })
})
