const { func1, func2 } = require('../06')

describe('Day 06', () => {
  const partOne = [
    { input: 'turn on 0,0 through 999,999|toggle 0,0 through 999,0|turn off 499,499 through 500,500', result: 998996 },
  ]

  const partTwo = [
    { input: 'turn on 0,0 through 0,0', result: 1 },
    { input: 'toggle 0,0 through 999,999', result: 2000000 },
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 () with input "${input}" to be ${result}`, () => {
      expect(func1(input)).toBe(result)
    })
  })

  partTwo.forEach(({input, result}) => {
    test(`Part 2 () with input "${input}" to be ${result}`, () => {
      expect(func2(input)).toBe(result)
    })
  })
})
