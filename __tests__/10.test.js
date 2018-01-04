const { func1 } = require('../10')

describe('Day 10', () => {
  const partOne = [
    { input: '1', result: '11' },
    { input: '11', result: '21' },
    { input: '21', result: '1211' },
    { input: '1211', result: '111221' },
    { input: '111221', result: '312211' },
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 (look and say) with input "${input}" to be ${result}`, () => {
      expect(func1(input)).toBe(result)
    })
  })

  test(`Part 1 (look and say five deep) with input "1" to be 312211`, () => {
    expect(func1('1', 5)).toBe('312211')
  })
})
