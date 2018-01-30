const input = 'Al => ThF|Al => ThRnFAr|B => BCa|B => TiB|B => TiRnFAr|Ca => CaCa|Ca => PB|Ca => PRnFAr|Ca => SiRnFYFAr|Ca => SiRnMgAr|Ca => SiTh|F => CaF|F => PMg|F => SiAl|H => CRnAlAr|H => CRnFYFYFAr|H => CRnFYMgAr|H => CRnMgYFAr|H => HCa|H => NRnFYFAr|H => NRnMgAr|H => NTh|H => OB|H => ORnFAr|Mg => BF|Mg => TiMg|N => CRnFAr|N => HSi|O => CRnFYFAr|O => CRnMgAr|O => HP|O => NRnFAr|O => OTi|P => CaP|P => PTi|P => SiRnFAr|Si => CaSi|Th => ThCa|Ti => BP|Ti => TiTi|e => HF|e => NAl|e => OMg||CRnCaCaCaSiRnBPTiMgArSiRnSiRnMgArSiRnCaFArTiTiBSiThFYCaFArCaCaSiThCaPBSiThSiThCaCaPTiRnPBSiThRnFArArCaCaSiThCaSiThSiRnMgArCaPTiBPRnFArSiThCaSiRnFArBCaSiRnCaPRnFArPMgYCaFArCaPTiTiTiBPBSiThCaPTiBPBSiRnFArBPBSiRnCaFArBPRnSiRnFArRnSiRnBFArCaFArCaCaCaSiThSiThCaCaPBPTiTiRnFArCaPTiBSiAlArPBCaCaCaCaCaSiRnMgArCaSiThFArThCaSiThCaSiRnCaFYCaSiRnFYFArFArCaSiRnFYFArCaSiRnBPMgArSiThPRnFArCaSiRnFArTiRnSiRnFYFArCaSiRnBFArCaSiRnTiMgArSiThCaSiThCaFArPRnFArSiRnFArTiTiTiTiBCaCaSiRnCaCaFYFArSiThCaPTiBPTiBCaSiThSiRnMgArCaF'

function func1(input) {
  const [x, base] = input.split('||')
  const replacements = x.split('|')
    .map(row => row.split(' => '))
    .reduce((r, [a, b]) => {
      r[a] = r[a] || []
      r[a].push(b)
      return r
    }, {})
  const regex = /[A-Z][a-z]?/g
  const molecules = {}
  let match, molecule


  while (match = regex.exec(base)) {
    const prefix = base.slice(0, match.index)
    const suffix = base.slice(match.index + match[0].length)

    if (replacements[match[0]]) {
      replacements[match[0]].forEach(replacement => {
        molecules[`${prefix}${replacement}${suffix}`] = true
      })
    }
  }

  return Object.keys(molecules).length
}

function func2(input) {
  return 0
}

if (require.main === module) {
  console.log('Part 1 ():', func1(input))
  //console.log('Part 2 ():', func2(input))
}

module.exports = {
  func1,
  func2,
}
