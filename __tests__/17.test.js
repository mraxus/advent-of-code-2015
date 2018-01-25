const { func1, func2 } = require('../17')

describe('Day 17', () => {
  const capacity = 25
  const containers = [20, 15, 10, 5, 5]
  const resultPart1 = 4
  const resultPart2 = 3

  test(`Part 1 (${containers.join(', ')}) with capacity ${capacity} should be ${resultPart1}`, () => {
    expect(func1(containers, capacity)).toBe(resultPart1)
  })

  test(`Part 2 (${containers.join(', ')}) with capacity ${capacity} should be ${resultPart1}`, () => {
    expect(func2(containers, capacity)).toBe(resultPart2)
  })
})
