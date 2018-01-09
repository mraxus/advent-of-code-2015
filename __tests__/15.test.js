const { func1, func2 } = require('../15')

describe('Day 15', () => {
  const input = 'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8|Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3'
  const result1 = 62842880
  const result2 = 57600000

  test(`Part 1 (max score) with ${input.split('|').length} ingredients to be ${result1}`, () => {
    expect(func1(input)).toBe(result1)
  })

  test(`Part 2 (max score of 500 cals) with ${input.split('|').length} ingredients to be ${result2}`, () => {
    expect(func2(input)).toBe(result2)
  })
})
