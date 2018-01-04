const input = '1113122113'

function func1(input, iterations=1) {
  let result = ''
  let count = 0

  for (let i = 0; i < input.length; i += 1) {
    count += 1
    if (input[i] !== input[i+1]) {
      result += `${count}${input[i]}`
      count = 0
    }
  }

  if (iterations <= 1) {
    return result
  }

  return func1(result, iterations - 1)
}

if (require.main === module) {
  console.log('Part 1 (look and say 40 times):', func1(input, 40).length)
  console.log('Part 2 (look and say 50 times):', func1(input, 50).length)
}

module.exports = {
  func1,
}
