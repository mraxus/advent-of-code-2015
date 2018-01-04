const { func1, func2 } = require('../07')

describe('Day 07', () => {
  const input = 'x AND y -> d|123 -> x|456 -> y|x OR y -> e|x LSHIFT 2 -> f|y RSHIFT 2 -> g|NOT x -> h|NOT y -> i'
  const partOne = [
    { char: 'd', result: 72 },
    { char: 'e', result: 507 },
    { char: 'f', result: 492 },
    { char: 'g', result: 114 },
    { char: 'h', result: 65412 },
    { char: 'i', result: 65079 },
    { char: 'x', result: 123 },
    { char: 'y', result: 456 },
  ]

  const partTwo = [
    { input: '', result: -1 },
  ]

  partOne.forEach(({ char, result }) => {
    test(`Part 1 (bitwise ops) to be ${result}`, () => {
      expect(func1(input, char)).toBe(result)
    })
  })

  // partTwo.forEach(({input, result}) => {
  //   test(`Part 2 () with input "${input}" to be ${result}`, () => {
  //     expect(func2(input)).toBe(result)
  //   })
  // })
})
