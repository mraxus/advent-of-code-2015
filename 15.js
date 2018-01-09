const input = 'Sprinkles: capacity 5, durability -1, flavor 0, texture 0, calories 5|PeanutButter: capacity -1, durability 3, flavor 0, texture 0, calories 1|Frosting: capacity 0, durability -1, flavor 4, texture 0, calories 6|Sugar: capacity -1, durability 0, flavor 0, texture 2, calories 8'
// const input = 'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8|Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3'
const REG = /\w+: c\w+ (-?\d), d\w+ (-?\d), f\w+ (-?\d), t\w+ (-?\d), c\w+ (-?\d)/


function func1(input) {
  const ingredients = input.split('|')
    .map(x => REG.exec(x))
    .map(([_, a, b, c, d]) => ({ a: +a, b: +b, c: +c, d: +d }))
  const len = ingredients.length
  const vars = Array(len).fill(0)
  let bestScore = Number.MIN_VALUE

  function doIt(ingredient, startAmount) {
    if (ingredient + 1 < len) {
      for (let amount = 0; amount <= 100 - startAmount; amount += 1) {
        vars[ingredient] = amount
        doIt(ingredient + 1, startAmount + amount)
      }
    } else {
      vars[ingredient] = 100 - startAmount

      const score = vars
        .map((amount, i) => {
          const { a, b, c, d } = ingredients[i]
          return [ a * amount, b * amount, c * amount, d * amount ]
        }, [0, 0, 0, 0])
        .reduce(([A, B, C, D], [a, b, c, d]) => [a+A, b+B, c+C, d+D], [0, 0, 0, 0])
        .map(x => x < 0 ? 0 : x)
        .reduce((prod, part) => part * prod, 1)

      if (bestScore < score) {
        bestScore = score
      }
    }
  }

  doIt(0, 0)

  return bestScore
}

function func2(input) {
  const ingredients = input.split('|')
    .map(x => REG.exec(x))
    .map(([_, a, b, c, d, e]) => ({ a: +a, b: +b, c: +c, d: +d, cals: +e }))
  const len = ingredients.length
  const vars = Array(len).fill(0)
  let bestScoreOf500 = Number.MIN_VALUE

  function doIt(ingredient, startAmount) {
    if (ingredient + 1 < len) {
      for (let amount = 0; amount <= 100 - startAmount; amount += 1) {
        vars[ingredient] = amount
        doIt(ingredient + 1, startAmount + amount)
      }
    } else {
      vars[ingredient] = 100 - startAmount


      const cals = vars
        .map((amount, i) => ingredients[i].cals * amount, 0)
        .reduce((total, part) => part + total, 0)

      const score = vars
        .map((amount, i) => {
          const { a, b, c, d } = ingredients[i]
          return [ a * amount, b * amount, c * amount, d * amount ]
        }, [0, 0, 0, 0])
        .reduce(([A, B, C, D], [a, b, c, d]) => [a+A, b+B, c+C, d+D], [0, 0, 0, 0])
        .map(x => x < 0 ? 0 : x)
        .reduce((prod, part) => part * prod, 1)

      if (cals === 500 && bestScoreOf500 < score) {
        bestScoreOf500 = score
      }
    }
  }

  doIt(0, 0)

  return bestScoreOf500
}

if (require.main === module) {
  console.log('Part 1 (cookie with best score):', func1(input))
  console.log('Part 2 (cookie with best score for 500 calories):', func2(input))
}

module.exports = {
  func1,
  func2,
}
