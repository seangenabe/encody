'use strict'

module.exports = function encody(strings, ...vals) {
  let results = []
  for (let i = 0, len = vals.length; i < len; i++) {
    results.push(strings[i])
    results.push(encodeURIComponent(vals[i]))
  }
  results.push(strings[vals.length])
  return results.join('')
}
