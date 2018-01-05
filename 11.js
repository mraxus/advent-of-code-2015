const input = 'vzbxkghb'

const BASE_NUMBER = 'a'.charCodeAt(0)
const ILLEGAL_NUMBERS = toNumSequence('ilo')

function toNumSequence(input) {
  return input.split('')
    .map(c => c.charCodeAt(0) - BASE_NUMBER)
    .reverse()
}
function fromNumSequence(sequence) {
  return String.fromCharCode(...sequence
    .reverse()
    .map(n => n + BASE_NUMBER)
  )
}
function genNextSequence(sequence, pos=0) {
  sequence[pos] = (sequence[pos] + 1) % 26 // as 26 is out of bounds (a-z)

  if (sequence[pos] === 0) {
    return genNextSequence(sequence, pos + 1)
  }

  return sequence
}

function func1(input) {
  const sequence = toNumSequence(input)
  const len = sequence.length
  let i, pairs, a, b, c, breakFree

  while (true) {
    genNextSequence(sequence)

    // Check if if any of the illegal characters are present
    if (ILLEGAL_NUMBERS.filter(n => sequence.indexOf(n) > -1).length) {
      continue
    }

    // Verify existence of two different
    pairs = 0
    for (i = 1; i < len; i += 1) {
      if (sequence[i-1] === sequence[i]) {
        pairs += 1
        i += 1 // Step forward to not overlap
      }
    }
    if (pairs < 2) {
      continue
    }

    // Find increase (in reverse) straight of at least 3
    breakFree = false
    for (i = 2; i < len; i += 1) {
      a = sequence[i]
      b = sequence[i-1]
      c = sequence[i-2]
      if (a + 1 === b && b + 1 === c ) {
        breakFree = true
        break // All three criteria are fulfilled
      }
    }
    if (breakFree) {
      break
    }
  }

  return fromNumSequence(sequence)
}

function func1_v2(input) {
  const sequence = toNumSequence(input)
  const len = sequence.length
  let pos, i, pairs, a, b, c, breakFree

  while (true) {
    genNextSequence(sequence)

    // Check if if any of the illegal characters are present
    pos = false
    for (i = len - 1; i >= 0; i -= 1) {
      a = sequence[i]
      if (a === 8 || a === 11 || a === 14) {
        pos = i
        break
      }
    }
    if (pos !== false) {
      sequence[pos] += 1
      for (i = 0; i < pos; i += 1) {
        sequence[i] = 0
      }
      continue
    }

    // Verify existence of two different
    pairs = 0
    for (i = 1; i < len; i += 1) {
      if (sequence[i-1] === sequence[i]) {
        pairs += 1
        i += 1 // Step forward to not overlap
      }
    }
    if (pairs < 2) {
      continue
    }

    // Find increase (in reverse) straight of at least 3
    breakFree = false
    for (i = 2; i < len; i += 1) {
      a = sequence[i]
      b = sequence[i-1]
      c = sequence[i-2]
      if (a + 1 === b && b + 1 === c ) {
        breakFree = true
        break // All three criteria are fulfilled
      }
    }
    if (breakFree) {
      break
    }
  }

  return fromNumSequence(sequence)
}

if (require.main === module) {
  console.log('Part 1 (next secure password):', func1_v2(input))
  console.log('Part 2 (next next secure password):', func1_v2(func1_v2(input)))
}

module.exports = {
  func1,
  func1_v2,
}
