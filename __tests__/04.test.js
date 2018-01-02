const { func1, func2 } = require('../04')

describe('Day 04', () => {
  const partOne = [
    { input: 'abcdef', result: 609043 },
    { input: 'pqrstuv', result: 1048970 },
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 () with input "${input}" to be ${result}`, () => {
      expect(func1(input)).toBe(result)
    })
  })
})
