const { func1, func2 } = require('../09')

describe('Day 09', () => {
  const input = 'London to Dublin = 464|London to Belfast = 518|Dublin to Belfast = 141'
  const resultPart1 = 605
  const resultPart2 = 982

  test(`Part 1 (shortest way) with to be ${resultPart1}`, () => {
    expect(func1(input)).toBe(resultPart1)
  })

  test(`Part 2 (longest way) with to be ${resultPart2}`, () => {
    expect(func2(input)).toBe(resultPart2)
  })
})
