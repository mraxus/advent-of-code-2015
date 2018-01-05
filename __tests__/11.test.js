const { func1, func1_v2 } = require('../11')

describe('Day 11', () => {
  const partOne = [
    { input: 'abcdefgh', result: 'abcdffaa' },
    { input: 'ghijklmn', result: 'ghjaabcc' },

    { input: 'vzbxkghb', result: 'vzbxxyzz' },
    { input: 'vzbxxyzz', result: 'vzcaabcc' },
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 (next secure password) with input "${input}" to be ${result}`, () => {
      expect(func1(input)).toBe(result)
    })
  })

  partOne.forEach(({input, result}) => {
    test(`Part 1 with some speed (next secure password) with input "${input}" to be ${result}`, () => {
      expect(func1_v2(input)).toBe(result)
    })
  })
})
