const input = 'Vixen can fly 19 km/s for 7 seconds, but then must rest for 124 seconds.|Rudolph can fly 3 km/s for 15 seconds, but then must rest for 28 seconds.|Donner can fly 19 km/s for 9 seconds, but then must rest for 164 seconds.|Blitzen can fly 19 km/s for 9 seconds, but then must rest for 158 seconds.|Comet can fly 13 km/s for 7 seconds, but then must rest for 82 seconds.|Cupid can fly 25 km/s for 6 seconds, but then must rest for 145 seconds.|Dasher can fly 14 km/s for 3 seconds, but then must rest for 38 seconds.|Dancer can fly 3 km/s for 16 seconds, but then must rest for 37 seconds.|Prancer can fly 25 km/s for 6 seconds, but then must rest for 143 seconds.'

// Groups: [_, name, speed, duration, rest] = REGEX.exec(str)
const REGEX = /(\w+) c[\w ]+ (\d+) k[\w \/]+ (\d+) [\w ,]+ (\d+) \w+./

function func1(input, afterSeconds) {
  const deerInfo = input.split('|')
    .map(line => REGEX.exec(line))
    .map(([_, name, speed, duration, rest]) => ({
      cycle: +duration + +rest,
      distancePerCycle: +duration * +speed,
      duration: +duration,
      name,
      rest: +rest,
      speed: +speed,
    }))
    .map(({ cycle, distancePerCycle, duration, name, rest, speed }) => {
      return {
        name,
        duration,
        deCycled: afterSeconds % cycle,
        cycles: Math.floor(afterSeconds / cycle),
        distanceForCompletedCycles: Math.floor(afterSeconds / cycle) * distancePerCycle,
        distanceForIncompleteCycle: Math.min(afterSeconds % cycle, duration) * speed,
        speed,
      }
    })
    .map(({ distanceForCompletedCycles, distanceForIncompleteCycle }) => ({
      distance: distanceForCompletedCycles + distanceForIncompleteCycle,
    }))
    .reduce((max, { distance }) => Math.max(max, distance), 0)

  return deerInfo
}

function func1_v2(input, sec) {
  return input.split('|')
    .map(line => REGEX.exec(line))
    .map(([_, __, speed, duration, rest]) => ([+duration, +rest, +speed]))
    .reduce((max, [duration, rest, speed]) => Math.max(
      max,
      Math.floor(sec / (duration + rest)) * duration * speed +
        Math.min(sec % (duration + rest), duration) * speed
    ), 0)
}

function func2(input, sec) {
  const deers = input.split('|')
    .map(line => REGEX.exec(line))
    .map(([_, __, speed, duration, rest]) => ({
      cycle: +duration + +rest,
      dist: 0,
      duration: +duration,
      rest: +rest,
      score: 0,
      speed: +speed,
    }))
  const len = deers.length
  let tick, d, deer, max

  for (tick = 0; tick < sec; tick += 1) {
    max = 0
    for (d = 0; d < len; d += 1) {
      deer = deers[d]
      if (tick % deer.cycle < deer.duration) {
        deer.dist += deer.speed
      }
      if (deer.dist > max) {
        max = deer.dist
      }
    }
    for (d = 0; d < len; d += 1) {
      deer = deers[d]
      if (deer.dist === max) {
        deer.score += 1
      }
    }
  }

  // return deers.reduce((max, { dist }) => Math.max(max, dist), 0)
  return deers.reduce((max, { score }) => Math.max(max, score), 0)
}

if (require.main === module) {
  const sec = 2503
  console.log(`Part 1 (furthest deerstance) after ${sec} sec:`, func1_v2(input, sec))
  console.log('Part 2 (higest scorre) after ${sec} sec:', func2(input, 2503))
}

module.exports = {
  func1,
  func1_v2,
  func2,
}
