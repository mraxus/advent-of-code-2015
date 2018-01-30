const { func1, func2 } = require('../19')

describe('Day 19', () => {
  const partOne = [
    { input: 'H => HO|H => OH|O => HH||HOH', result: 4 },
    { input: 'H => HO|H => OH|O => HH||HOHOHO', result: 7 },
  ]

  const partTwo = [
    { input: '', result: -1 },
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 () with input "${input}" to be ${result}`, () => {
      expect(func1(input)).toBe(result)
    })
  })

  // partTwo.forEach(({input, result}) => {
  //   test(`Part 2 () with input "${input}" to be ${result}`, () => {
  //     expect(func2(input)).toBe(result)
  //   })
  // })
})
