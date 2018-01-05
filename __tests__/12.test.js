const { func1, func2 } = require('../12')

describe('Day 12', () => {
  const partOne = [
    { input: '[1,2,3]', result: 6 },
    { input: '{"a":2,"b":4}', result: 6 },
    { input: '[[[3]]]', result: 3 },
    { input: '{"a":{"b":4},"c":-1}', result: 3 },
    { input: '{"a":[-1,1]}', result: 0 },
    { input: '[-1,{"a":1}]', result: 0 },
    { input: '[]', result: 0 },
    { input: '{}', result: 0 },
  ]

  const partTwo = [
    { input: '[1,2,3]', result: 6 },
    { input: '[1,{"c":"red","b":2},3]', result: 4 },
    { input: '{"d":"red","e":[1,2,3,4],"f":5}', result: 0 },
    { input: '[1,"red",5]', result: 6 },
  ]

  partOne.forEach(({input, result}) => {
    test(`Part 1 (find json sum) with input "${input}" to be ${result}`, () => {
      expect(func1(input)).toBe(result)
    })
  })

  partTwo.forEach(({input, result}) => {
    test(`Part 2 (find non-red json sum) with input "${input}" to be ${result}`, () => {
      expect(func2(input)).toBe(result)
    })
  })
})
