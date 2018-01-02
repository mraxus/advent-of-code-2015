const { func1, func2 } = require('../03')

describe('Day 03', () => {
  const partOne = [
    { input: '>', result: 2 },
    { input: '^>v<', result: 4 },
    { input: '^v^v^v^v^v', result: 2 },
  ]

  const partTwo = [
    { input: '^v', result: 3 },
    { input: '^>v<', result: 3 },
    { input: '^v^v^v^v^v', result: 11 },
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 (santa delivery) with input "${input}" to be ${result}`, () => {
      expect(func1(input)).toBe(result)
    })
  })

  partTwo.forEach(({input, result}) => {
    test(`Part 2 (santa and robot delivery) with input "" to be `, () => {
      expect(func2(input)).toBe(result)
    })
  })
})
