const input = 'Tristram to AlphaCentauri = 34|Tristram to Snowdin = 100|Tristram to Tambi = 63|Tristram to Faerun = 108|Tristram to Norrath = 111|Tristram to Straylight = 89|Tristram to Arbre = 132|AlphaCentauri to Snowdin = 4|AlphaCentauri to Tambi = 79|AlphaCentauri to Faerun = 44|AlphaCentauri to Norrath = 147|AlphaCentauri to Straylight = 133|AlphaCentauri to Arbre = 74|Snowdin to Tambi = 105|Snowdin to Faerun = 95|Snowdin to Norrath = 48|Snowdin to Straylight = 88|Snowdin to Arbre = 7|Tambi to Faerun = 68|Tambi to Norrath = 134|Tambi to Straylight = 107|Tambi to Arbre = 40|Faerun to Norrath = 11|Faerun to Straylight = 66|Faerun to Arbre = 144|Norrath to Straylight = 115|Norrath to Arbre = 135|Straylight to Arbre = 127'

function tsp(connections, location, unvisited) {
  if (unvisited.length === 0) {
    return {
      dist: 0,
      route: `${location}`,
    }
  }

  return unvisited
    .map((nextLocation, index) => {
      const { dist: pastDist, route } = tsp(
        connections,
        nextLocation,
        unvisited.slice(0, index).concat(unvisited.slice(index + 1))
      )
      const dist = connections[location][nextLocation]
      const totalDist = dist + pastDist

      return {
        dist: totalDist,
        route: `${location} ==|${dist}|=> ${route}`,
      }
    })
    .reduce(({ dist: minDist, route: minRoute }, { dist, route }) => {
      if (dist < minDist) {
        return { dist, route }
      }
      return { dist: minDist, route: minRoute }
    }, { dist: Number.MAX_VALUE, route: '' })
}

function inverseTsp(connections, location, unvisited) {
  if (unvisited.length === 0) return 0

  return unvisited
    .map((nextLocation, index) => {
      const pastDist = inverseTsp(
        connections,
        nextLocation,
        unvisited.slice(0, index).concat(unvisited.slice(index + 1))
      )
      const dist = connections[location][nextLocation]
      return dist + pastDist
    })
    .reduce((maxDist, dist) => Math.max(maxDist, dist), 0)
}

function func1(input) {
  const connections = input.split('|')
    .reduce((conn, line) => {
      const [from, _, to, __, dist] = line.split(' ')
      conn[from] = conn[from] || {}
      conn[to] = conn[to] || {}

      conn[from][to] = +dist
      conn[to][from] = +dist

      return conn
    }, {})
  const unvisited = Object.keys(connections)

  return unvisited
    .map((location, index) => tsp(
      connections,
      location,
      unvisited.slice(0, index).concat(unvisited.slice(index + 1))
    ))
    .reduce((min, { dist }) => Math.min(min, dist), Number.MAX_VALUE)
}

function func2(input) {
  const connections = input.split('|')
    .reduce((conn, line) => {
      const [from, _, to, __, dist] = line.split(' ')
      conn[from] = conn[from] || {}
      conn[to] = conn[to] || {}

      conn[from][to] = +dist
      conn[to][from] = +dist

      return conn
    }, {})
  const unvisited = Object.keys(connections)

  return unvisited
    .map((location, index) => inverseTsp(
      connections,
      location,
      unvisited.slice(0, index).concat(unvisited.slice(index + 1))
    ))
    .reduce((maxDist, dist) => Math.max(maxDist, dist), 0)
}

if (require.main === module) {
  console.log('Part 1 (shortest way):', func1(input))
  console.log('Part 2 (longest way):', func2(input))
}

module.exports = {
  func1,
  func2,
}
