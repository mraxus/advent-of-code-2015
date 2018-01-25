const containers = [11, 30, 47, 31, 32, 36, 3, 1, 5, 3, 32, 36, 15, 11, 46, 26, 28, 1, 19, 3]

function capacityCombinations(restCapacity, containers) {
  if (restCapacity === 0) { return 1 }
  if (restCapacity < 0 || containers.length === 0) { return 0 }

  const value = containers[0]
  const tail = containers.slice(1)

  return capacityCombinations(restCapacity - value, tail) +
         capacityCombinations(restCapacity, tail)
}

function minCapacityCombinations(restCapacity, containers, containerCount) {
  if (restCapacity === 0) { return { containerCount, perm: 1 } }
  if (restCapacity < 0 || containers.length === 0) { return null }

  const value = containers[0]
  const tail = containers.slice(1)

  return [
    minCapacityCombinations(restCapacity - value, tail, containerCount + 1),
    minCapacityCombinations(restCapacity, tail, containerCount),
  ]
    .filter(x => x)
    .reduce((res, part) => {
      if (!res) { return part }
      if (res.containerCount === part.containerCount) {
        return { containerCount: res.containerCount, perm: res.perm + part.perm}
      }
      if (res.containerCount > part.containerCount) { return part }
      if (res.containerCount < part.containerCount) { return res }
    }, null)
}


function func1(containers, capacity) {
  return capacityCombinations(capacity, containers)
}

function func2(containers, capacity) {
  return minCapacityCombinations(capacity, containers, 0).perm
}

if (require.main === module) {
  console.log('Part 1 (# of container combinations):', func1(containers, 150))
  console.log('Part 2 (# of min container combinations):', func2(containers, 150))
}

module.exports = {
  func1,
  func2,
}
