const { func1, func2 } = require('../08')

describe('Day 08', () => {
  const input = '""|"abc"|"aaa\\"aaa"|"\\x27"'
  const resultPart1 = 12
  const resultPart2 = 19

  test(`Part 1 (finding diff between string space and code space) with input "${input}" to be ${resultPart1}`, () => {
    expect(func1(input)).toBe(resultPart1)
  })

  test(`Part 2 (finding diff between encoded space and string space) with input "${input}" to be ${resultPart2}`, () => {
    expect(func2(input)).toBe(resultPart2)
  })
})
