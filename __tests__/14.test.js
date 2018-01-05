const { func1, func1_v2, func2 } = require('../14')

describe('Day 14', () => {
  const input = 'Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.|Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.'
  const afterSeconds = 1000
  const resultPart1 = 1120
  const resultPart2 = 689

  test(`Part 1 (furthest deerstance) to be ${resultPart1}`, () => {
    expect(func1(input, afterSeconds)).toBe(resultPart1)
  })

  test(`Part 1 v2 (furthest deerstance) to be ${resultPart1}`, () => {
    expect(func1_v2(input, afterSeconds)).toBe(resultPart1)
  })

  test(`Part 2 (higest scorre) to be ${resultPart2}`, () => {
    expect(func2(input, afterSeconds)).toBe(resultPart2)
  })
})
