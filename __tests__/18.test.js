const { func1, func2 } = require('../18')

describe('Day 18', () => {
  const partOne = [
    {
      state: '.#.#.#|...##.|#....#|..#...|#.#..#|####..',
      steps: 4,
      result: 4
    },
  ]

  const partTwo = [
    {
      state: '.#.#.#|...##.|#....#|..#...|#.#..#|####..',
      steps: 5,
      result: 17
    },
  ]

  partOne.forEach(({ state, steps, result }) => {
    test(`Part 1 (number of lights on) should after ${steps} steps result in ${result} lights on`, () => {
      expect(func1(state, steps)).toBe(result)
    })
  })

  partTwo.forEach(({ state, steps, result }) => {
    test(`Part 2 (with corners always on) should after ${steps} steps result in ${result} lights on`, () => {
      expect(func2(state, steps)).toBe(result)
    })
  })
})
